class ServicesController < ApplicationController
  layout :resolve_layout
  def index
    filters = params.slice(:name, :search)
    services = Service.preload(:service_category, :service_prices, :staffs).peep_filter(filters)
    respond_to do |format|
      format.html{
        @categories = ServiceCategory.where(id: services.map(&:service_category_id)).all
        @services = services
      }
      format.json{
        serializers = ActiveModel::Serializer::ArraySerializer.new(services, each_serializer: ServiceSerializer)
        render json: {data: serializers}, status: :ok
      }
    end

  end

  def top
    data = TopServices.perform
    render json: {data: data}, status: :ok
  end

  def new
    @staff = Staff.all
    @service = Service.new({service_category_id: params[:category_id] })
    @service.service_prices.build
  end

  def edit
    @staff = Staff.all
    @service = Service.find params[:id]
    @service.service_prices.build if @service.service_prices.blank?
  end

  def show
    service = Service.find(params[:id])
    render json: {data: ServiceSerializer.new(service)}, status: :ok
  end

  def create
    service = Service.new(service_params)
    respond_to do |format|
      format.json {
        if service.save
          service.staff_ids = service_params[:staff_ids]
          render json: {data: ServiceSerializer.new(service)}, status: :created
        else
          render json: service.errors, status: :unprocessable_entity
        end
      }
      format.html {
        if service.save
          service.staff_ids = service_params[:staff_ids]
          redirect_to services_path
        else
          redirect_to new_service_path, notice: 'Can not create Service'
        end
      }
    end

  end

  def update
    service = Service.find(params[:id])
    respond_to do |format|
      format.json{
        if service.update(service_params)
          service.staff_ids = service_params[:staff_ids]
          render json: {data: ServiceSerializer.new(service)}, status: :ok
        else
          render json: service.errors, status: :unprocessable_entity
        end
      }
      format.html{
        @service = service
        if @service.update(service_params)
          @service.staff_ids = service_params[:staff_ids]
          redirect_to services_path
        else
          redirect_to edit_service_path(@service)
        end
      }
    end

  end

  def destroy
    service = Service.find(params[:id])
    respond_to do |format|
      format.json {
        if service.destroy
          render json: {}, status: :ok
        else
          render json: {}, status: :bad_request
        end
      }
      format.html do
        if service.destroy
          redirect_to services_path
        else
          redirect_to :back, notice: 'Can not delete item'
        end
      end
    end
  end

  private

  def service_params
    params.require(:service).permit(:name, :treatment_type_id, :description,
                                    :available_for, :staff_commission, :extra_time,
                                    :extra_time_type, :extra_time_duration, :service_category_id,
                                    location_ids: [], staff_ids: [],
                                    service_prices_attributes: [
                                        :id, :service_id, :name, :duration, :pricing_type,
                                        :price, :_destroy])
  end

  def resolve_layout
    case action_name
    when "new", "edit", 'show'
      "forms"
    else
      "dash"
    end
  end
end
