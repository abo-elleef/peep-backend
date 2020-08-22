class ClientsController < ApplicationController

  def index
    clients = Client.search(params[:search])
    pagy, clients = pagy(clients, page: page_index, items: page_size )
    serializers = ActiveModel::Serializer::ArraySerializer.new(clients, each_serializer: ClientSerializer)
    render json: {data: serializers, meta: pagy_meta_data(pagy)},  status: :ok

  end

  def show
    client = Client.find(params[:id])
    render json: { data: ClientSerializer.new(client) },  status: :ok
  end

  def create
    client = Client.new(client_params)
    client.location = current_location
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

  private

    def client_params
      params.require(:client).permit(:first_name, :last_name, :phone, :email, :notify_method,
                                     :language, :gender, :birthday, :notes, :global_notes,
                                     :street, :area, :block, :avenue, :building
                                     )
    end
end
