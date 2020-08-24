class ServicesController < ApplicationController

  def index
    filters = params.slice(:name, :search)
    services = Service.preload(:service_category, :service_prices, :staffs).peep_filter(filters)
    serializers = ActiveModel::Serializer::ArraySerializer.new(services, each_serializer: ServiceSerializer)
    render json: {data: serializers},  status: :ok
  end

  def show
    service = Service.find(params[:id])
    render json: {data: ServiceSerializer.new(service)}, status: :ok
  end

  def create
    service = Service.new(service_params)
    if service.save
      service.staff_ids = service_params[:staff_ids]
      render json: {data: ServiceSerializer.new(service)}, status: :created
    else
      render json: service.errors, status: :unprocessable_entity
    end
  end

  def update
    service = Service.find(params[:id])
    if service.update(service_params)
      debugger
      service.staff_ids = service_params[:staff_ids]
      render json: {data: ServiceSerializer.new(service)}, status: :ok
    else
      render json: service.errors, status: :unprocessable_entity
    end
  end

  def destroy
    service = Service.find(params[:id])
    if service.destroy
      render json: {}, status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private

  def service_params
    params.require(:service).permit( :name, :treatment_type_id, :description,
                                    :available_for, :staff_commission, :extra_time,
                                     :extra_time_type, :extra_time_duration, :service_category_id,
                                     location_ids: [], staff_ids: [],
                                     service_prices_attributes: [
                                         :id, :service_id, :name, :duration, :pricing_type,
                                         :price, :special_price, :_destroy])
  end
end
