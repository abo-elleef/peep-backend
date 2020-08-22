class ServiceCategoriesController < ApplicationController

  def index
    service_categories = ServiceCategory.preload(services: [:service_prices]).peep_filter(params.slice(:name, :search)).limit(10)
    render json: {data: service_categories}, each_serializer: ProductCategorySerializer,  status: :ok
  end

  def show
    service_category = ServiceCategory.find(params[:id])
    render json: {data: service_category},  each_serializer: ServiceCategorySerializer, status: :ok

  end

  def create
    service_category = ServiceCategory.new(service_category_params)
    if service_category.save
      render json: {data: service_category},  each_serializer: ServiceCategorySerializer,
             status: :created
    else
      render json: service_category.errors, status: :unprocessable_entity
    end
  end

  def update
    service_category = ServiceCategory.find(params[:id])
    if service_category.update(service_category_params)
      render json: {data: service_category},  each_serializer: ServiceCategorySerializer,
             status: :ok
    else
      render json: service_category.errors, status: :unprocessable_entity
    end
  end

  def destroy
    service_category = ServiceCategory.find(params[:id])
    if service_category.destroy
      render json: {}, status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private

  def service_category_params
    params.require(:service_category).permit( :name, :appointment_color, :description)
  end
end
