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
      lines_types = params[:lines].map { |line| line[:sellable_type] }.uniq
      Checkout::VoucherCreation.new(params[:lines].select { |line| line[:sellable_type] == 'VoucherType' }, invoice.id).call if lines_types.include?('VoucherType')
      if lines_types.include?('Service') && params[:appointment_id].present?
        services_ids = params[:lines].select { |line| line[:sellable_id] }.where(line[:sellable_type] == 'Service')
        new_services_ids, removed_services_ids = appointment_services?(params[:appointment_id], services_ids).presence
        if new_services_ids.present? || removed_services_ids.present?
          new_services = params[:lines].select { |line| line[:sellable_type] == 'Service' && line[:sellable_id] == new_services_ids }
          Checkout::AppointmentCreation.appointment_service_builder(new_services, removed_services_ids, params[:appointment_id])
        end
      elsif lines_types.include?('Service') && params[:appointment_id].blank?
        Checkout::AppointmentCreation.appointment_builder(params)
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

  def appointment_services?(appointment_id, services_ids)
    appointment_service_ids = Appointment.find(appointment_id).service_ids
    new_services = services_ids - appointment_service_ids
    removed_services = appointment_service_ids - services_ids
    return new_services, removed_services
  end
end