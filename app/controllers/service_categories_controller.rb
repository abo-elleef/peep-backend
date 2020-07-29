class ServiceCategoriesController < ApplicationController

  def index
    shifts = ServiceCategory.all
    render json: ServiceCategorySerializer.new(shifts), status: :ok
  end

  def show
    shift = ServiceCategory.find(params[:id])
    render json: ServiceCategorySerializer.new(shift), status: :ok
  end

  def create
    shift = ServiceCategory.new(shift_params)
    if shift.save
      render json: ServiceCategorySerializer.new(shift), status: :created
    else
      render json: shift.errors, status: :unprocessable_entity
    end
  end

  def update
    shift = ServiceCategory.find(params[:id])
    if shift.update(shift_params)
      render json: ServiceCategorySerializer.new(shift), status: :ok
    else
      render json: shift.errors, status: :unprocessable_entity
    end
  end

  def destroy
    shift = ServiceCategory.find(params[:id])
    if shift.destroy
      render json: ServiceCategorySerializer.new(shift), status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private

  def shift_params
    params.require(:shift).permit(:id, :name, :appointment_color, :description)
  end
end
