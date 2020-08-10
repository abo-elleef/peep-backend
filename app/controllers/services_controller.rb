class ServicesController < ApplicationController

  def index
    services = Service.peep_filter(params.slice(:name, :search))
    render json: ServiceSerializer.new(services, include: [:service_prices]), status: :ok
  end

  def show
    service = Service.find(params[:id])
    render json: ServiceSerializer.new(service, include: [:service_prices]), status: :ok
  end

  def create
    service = Service.new(service_params)
    if service.save
      render json: ServiceSerializer.new(service, include: [:service_prices]), status: :created
    else
      render json: service.errors, status: :unprocessable_entity
    end
  end

  def update
    service = Service.find(params[:id])
    if service.update(service_params)
      render json: ServiceSerializer.new(service, include: [:service_prices]), status: :ok
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
                                     service_prices_attributes: [:id, :service_id, :name, :duration,
                                                                 :pricing_type, :price, :special_price])
  end
end
