class ServiceCategoriesController < ApplicationController

  def index
    service_categories = ServiceCategory.preload(services: [:service_prices, :staffs]).peep_filter(params.slice(:name, :search))
    serializers = ActiveModel::Serializer::ArraySerializer.new(service_categories, each_serializer: ServiceCategorySerializer)
    render json: {data: serializers},  status: :ok
  end

  def show
    service_category = ServiceCategory.find(params[:id])
    render json: {data: ServiceCategorySerializer.new(service_category)}, status: :ok
  end

  def new
    @category = ServiceCategory.new
  end

  def edit
    @category = ServiceCategory.find params[:id]
  end

  def create
    service_category = ServiceCategory.new(service_category_params)
    if service_category.save
      redirect_to services_path
    else
      render json: service_category.errors, status: :unprocessable_entity
    end
  end

  def update
    service_category = ServiceCategory.find(params[:id])
    if service_category.update(service_category_params)
      redirect_to services_path
    else
      render json: service_category.errors, status: :unprocessable_entity
    end
  end

  def destroy
    service_category = ServiceCategory.find(params[:id])
    respond_to do |format|
      format.json {
        if service_category.destroy
          render json: {}, status: :ok
        else
          render json: {}, status: :bad_request
        end
      }
      format.html {
        if service_category.destroy
          redirect_to services_path
        else
          render json: {}, status: :bad_request
        end
      }
    end

  end

  private

  def service_category_params
    params.require(:service_category).permit( :name, :appointment_color, :description)
  end
end
