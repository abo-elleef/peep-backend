class ServicesCategoriesController < ApplicationController

  def index
    shifts = ServicesCategory.all
    render json: ServicesCategorySerializer.new(shifts), status: :ok
  end

  def show
    shift = ServicesCategory.find(params[:id])
    render json: ServicesCategorySerializer.new(shift), status: :ok
  end

  def create
    shift = ServicesCategory.new(shift_params)
    if shift.save
      render json: ServicesCategorySerializer.new(shift), status: :created
    else
      render json: shift.errors, status: :unprocessable_entity
    end
  end

  def update
    shift = ServicesCategory.find(params[:id])
    if shift.update(shift_params)
      render json: ServicesCategorySerializer.new(shift), status: :ok
    else
      render json: shift.errors, status: :unprocessable_entity
    end
  end

  def destroy
    shift = ServicesCategory.find(params[:id])
    if shift.destroy
      render json: ServicesCategorySerializer.new(shift), status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private

  def shift_params
    params.require(:shift).permit(:id, :name, :appointment_color, :description)
  end
end
