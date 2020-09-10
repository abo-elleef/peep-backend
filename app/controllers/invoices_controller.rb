class InvoicesController < ApplicationController

  def index
    invoices = Invoice.preload(:location).peep_filter(params.slice(:location_id, :search))
    pagy, invoices = pagy(invoices, page: page_index, items: page_size)
    data = InvoicePresenter.new(invoices).present_invoice_index
    render json: {invoices: data, meta: pagy_meta_data(pagy)}, status: :ok
  end

  def show
    invoice = Invoice.find(params[:id])
    render json: {data: InvoicePresenter.new(invoice).present_invoice}, status: :ok
  end

  def checkout
    if Invoice.find_by(invoiceable_id: params[:invoiceable_id]).blank?
      invoice = Checkout::InvoiceCreation.new(params).call
      items_types = params[:items].map { |item| item[:payable_type] }.uniq
      Checkout::VoucherCreation.new(params[:items].select { |item| item[:payable_type] == 'VoucherType' }, invoice.id).call if items_types.include?('VoucherType')
      if items_types.include?('Service') && params[:invoiceable_type] != 'Appointment'
        Checkout::AppointmentCreation.new(params).appointment_builder
      elsif items_types.include?('Service') && params[:invoiceable_type] == 'Appointment'
        Checkout::AppointmentCreation.new(params).line_builder
      end
      # TODO ProductProcessing.new(params) if items_types.include?('Product')
      render json: {data: InvoicePresenter.new(invoice).present_invoice}, status: :ok
    else
      render json: {}, status: :locked
    end
  end

  # update just in case of the new payment
  def update
    invoice = Invoice.find(params[:id])
    update_invoice_payment(invoice.id, params[:payments])
    invoice.status = params[:status]
    if invoice.save!
      render json: {data: InvoicePresenter.new(invoice).present_invoice}, status: :ok
    else
      render json: invoice.errors, status: :unprocessable_entity
    end
  end

  private

  def update_invoice_payment(invoice_id, payments)
    new_payments = payments.select { |payment| !payment[:id].present? }
    new_payments.map do |payment|
      Payment.create!(invoice_id: invoice_id, payment_type_id: payment[:payment_type_id], amount: payment[:amount], staff_id: payment[:staff_id])
    end
  end
end