class ServiceCategoriesController < ApplicationController

  def index
    service_categories = ServiceCategory.filter(params.slice(:name, :search))
    render json: ServiceCategorySerializer.new(service_categories, include: [:services]), status: :ok
  end

  def show
    service_category = ServiceCategory.find(params[:id])
    render json: ServiceCategorySerializer.new(service_category, include: [:services]), status: :ok
  end

  def create
    service_category = ServiceCategory.new(service_category_params)
    if service_category.save
      render json: ServiceCategorySerializer.new(service_category), status: :created
    else
      render json: service_category.errors, status: :unprocessable_entity
    end
  end

  def update
    service_category = ServiceCategory.find(params[:id])
    if service_category.update(service_category_params)
      render json: ServiceCategorySerializer.new(service_category), status: :ok
    else
      render json: service_category.errors, status: :unprocessable_entity
    end
  end

  def destroy
    service_category = ServiceCategory.find(params[:id])
    if service_category.destroy
      render json: ServiceCategorySerializer.new(service_category), status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private

  def service_category_params
    params.require(:service_category).permit( :name, :appointment_color, :description)
  end
end
