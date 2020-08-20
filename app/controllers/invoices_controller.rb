class InvoicesController < ApplicationController

  def build_invoices
    appointment_ids =
        params[:appointment_id].present? ? params[:appointment_id] : Appointment.joins(:payments).where(location_id: params[:location_id]).pluck(:id)
    invoices = InvoiceBuilder.new(appointment_ids).call
    render json: {invoices: invoices}, status: :ok
  end
end