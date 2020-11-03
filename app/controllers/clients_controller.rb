class ClientsController < ApplicationController
  layout :resolve_layout
  def index
    clients = Client.search(params[:search]).desc_order
    @pagy, @clients = pagy(clients, page: page_index, items: page_size )

    # serializers = ActiveModel::Serializer::ArraySerializer.new(clients, each_serializer: ClientSerializer)
    # render json: {data: serializers, meta: pagy_meta_data(pagy)},  status: :ok

  end

  def new
    @client = Client.new
  end
  def edit
    @client = Client.find(params[:id])
  end

  def show
    @client = Client.find(params[:id])
    # render json: { data: ClientSerializer.new(client) },  status: :ok
  end

  def mini_details
    @client = Client.find(params[:id])
  end

  def appointments
    client = Client.find(params[:id])
    appointments = client.appointments.order("appointments.id DESC").preload(:appointment_services).limit(10).compact
    serializers = ActiveModel::Serializer::ArraySerializer.new(appointments, serializer: AppointmentSerializer)
    render json: {data: serializers},  status: :ok
  end

  def products
    # TODO should be only products
    client = Client.find(params[:id])
    lines = client.invoices.joins(:lines).where("lines.sellable_type = 'Product'").order("invoices.id DESC").
        limit(10).map(&:lines).flatten.select {|a| a.sellable_type = 'Product'}.first(10)
    serializers = ActiveModel::Serializer::ArraySerializer.new(lines, serializer: LineSerializer)
    render json: {data: serializers},  status: :ok
  end

  def vouchers
    # TODO should be only vouchers
    client = Client.find(params[:id])
    invoices = client.invoices.order("invoices.id DESC").limit(10).map(&:appointment).compact
    serializers = ActiveModel::Serializer::ArraySerializer.new(invoices, serializer: AppointmentSerializer)
    render json: {data: serializers},  status: :ok
  end

  def subscriptions
    # TODO should be only subscriptions
    client = Client.find(params[:id])
    invoices = client.invoices.order("invoices.id DESC").limit(10).map(&:appointment).compact
    serializers = ActiveModel::Serializer::ArraySerializer.new(invoices, serializer: AppointmentSerializer)
    render json: {data: serializers},  status: :ok
  end

  def invoices
    client = Client.find(params[:id])
    invoices = client.invoices.order("invoices.id DESC").limit(10)
    serializers = ActiveModel::Serializer::ArraySerializer.new(invoices, serializer: InvoiceSerializer)
    render json: {data: serializers},  status: :ok
  end

  def create
    client = Client.new(client_params)
    if client.save
      render json: { data: ClientSerializer.new(client) }, status: :created
    else
      render json: client.errors,status: :unprocessable_entity
    end
  end

  def update
    client = Client.find(params[:id])
    if client.update(client_params)
      render json: { data: ClientSerializer.new(client) },  status: :ok
    else
      render json: client.errors,status: :unprocessable_entity
    end
  end

  def destroy
    client = Client.find(params[:id])
    if client.destroy
      render json: {}, status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  def client_sales
    client_data = ClientSales.perform(params[:id])
    render json: { data: client_data} , status: :ok
  end

  private

    def client_params
      params.require(:client).permit(:first_name, :last_name, :phone, :email, :notify_method,
                                     :language, :gender, :birthday, :notes, :global_notes,
                                     :street, :area, :block, :avenue, :building
                                     )
    end
    def resolve_layout
      case action_name
      when "new", "edit"
        "forms"
      else
        "dash"
      end
    end
end
