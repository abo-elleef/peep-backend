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
    invoice_values = Checkout::InvoiceCalculation.perform(params)
    invoice = Invoice.new(invoice_params.merge(sequence: Invoice.next_sequence(params[:location_id]),
                                               sub_total: invoice_values[:total], total: invoice_values[:total], balance: invoice_values[:balance]))
    if invoice.save!
      lines_types = params[:lines_attributes].map { |line| line[:sellable_type] }.uniq
      Checkout::VoucherCreation.new(params[:lines_attributes].select { |line| line[:sellable_type] == 'VoucherType' }, invoice.id).call if lines_types.include?('VoucherType')
      Checkout::AppointmentCreation.new(params).perform if lines_types.include?('Service') || params[:appointment_id].present?
      # TODO ProductProcessing.new(params) if items_types.include?('Product')
      render json: {data: InvoicePresenter.new(invoice).present_invoice}, status: :ok
    else
      render json: invoice.errors, status: :unprocessable_entity
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

  def invoice_params
    params.require(:invoice).permit(
        :sequence, :notes, :client_id, :location_id, :status, :sub_total, :total, :balance, :staff_id,
        lines_attributes: [:id, :invoice_id, :staff_id,
                           :sellable_id, :sellable_type, :sellable_name, :unit_price,
                           :original_unit_price, :starts_at, :ends_at, :quantity],
        payments_attributes: [:id, :invoice_id, :payment_type_id, :amount],
        tips_attributes: [:id, :staff_id, :value, :_destroy])
  end

  def update_invoice_payment(invoice_id, payments)
    new_payments = payments.select { |payment| !payment[:id].present? }
    new_payments.map do |payment|
      Payment.create!(invoice_id: invoice_id, payment_type_id: payment[:payment_type_id], amount: payment[:amount], staff_id: payment[:staff_id])
    end
  end
end