class InvoicesController < ApplicationController

  def index
    invoices = Invoice.joins(:appointment).where(appointments: {location_id: params[:location_id]})
    pagy, invoices = pagy(invoices, page: page_index, items: page_size)
    serializers = ActiveModel::Serializer::ArraySerializer.new(invoices, serializer: InvoiceSerializer)
    render json: {data: serializers, meta: pagy_meta_data(pagy)},  status: :ok

  end

  def show
    appointment_id = params[:appointment_id]
    invoices = InvoiceBuilder.new([appointment_id]).call
    render json: {data: invoices}, status: :ok
  end
end

