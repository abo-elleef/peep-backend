class ClosingShiftsController < ApplicationController

  def index
    closing_shifts = ClosingShift.preload(:locations).peep_filter(params.slice(:location_id))
    render json: {data: closing_shifts}, each_serializer: ClosingShiftSerializer, status: :ok
  end

  def show
    closing_shift = ClosingShift.find(params[:id])
    render json: {data: closing_shift}, each_serializer: ClosingShiftSerializer, status: :ok
  end

  def create
    closing_shift = ClosingShift.new(closing_shift_params)
    if closing_shift.save
      render json: {data: closing_shift}, each_serializer: ClosingShiftSerializer, status: :created
    else
      render json: closing_shift.errors, status: :unprocessable_entity
    end
  end

  def update
    closing_shift = ClosingShift.find(params[:id])
    if closing_shift.update(closing_shift_params)
      render json: {data: closing_shift}, each_serializer: ClosingShiftSerializer, status: :ok
    else
      render json: closing_shift.errors, status: :unprocessable_entity
    end
  end

  def destroy
    closing_shift = ClosingShift.find(params[:id])
    if closing_shift.destroy
      render json: {}, status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private

  def closing_shift_params
    params.require(:closing_shift).permit(
      :id, :starts_at, :ends_at, :desc, location_ids: []
    )
  end
end
