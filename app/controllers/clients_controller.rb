class ClientsController < ApplicationController

  def index
    clients = Client.all
    render json: clients,status: :ok, root: 'clients', serializer: ClientSerializer
  end

  def show
    client = Client.find(client_params[:id])
    render json: client,status: :ok, root: 'client', serializer: ClientSerializer
  end

  def create
    client = Client.new(client_params[:id])
    if client.save
      render json: client,status: :created, root: 'client', serializer: ClientSerializer
    else
      render json: client.errors,status: :unprocessable_entity, root: 'client',
             serializer: ClientSerializer
    end
  end

  def update
    client = Client.new(client_params[:id])
    if client.update(client_params)
      render json: client,status: :ok, root: 'client', serializer: ClientSerializer
    else
      render json: client.errors,status: :unprocessable_entity, root: 'client',
             serializer: ClientSerializer
    end
  end

  def destroy
    client = Client.new(client_params[:id])
    if @client.destroy
      render json: client,status: :ok, root: 'client', serializer: ClientSerializer
    else
      render json: {},status: :bad_request
    end
  end

  private

    def client_params
      params.require(:client).permit(:first_name, :last_name, :phone, :email, :notify_method, :language, :gender, :birthday, :notes, :global_notes, :location_id)
    end
end
