class InvoicesController < ApplicationController

  def index
    appointment_ids =
        params[:appointment_id].present? ? params[:appointment_id] : Invoice.joins(:appointment).where(appointments: {location_id: params[:location_id]}).pluck(:appointment_id)
    invoices = InvoiceBuilder.new(appointment_ids).call
    render json: {invoices: invoices}, status: :ok
  end
end

