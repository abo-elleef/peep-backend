class ClosingShiftsController < ApplicationController

  def index
    closing_shifts = ClosingShift.all
    render json: closing_shifts, status: :ok, root: 'closing_shifts', serializer: ClosingShiftSerializer
  end

  def show
    closing_shift = ClosingShift.find(params[:id])
    render json: closing_shift, status: :ok, root: 'closing_shift', serializer: ClosingShiftSerializer
  end

  def create
    closing_shift = ClosingShift.new(closing_shift_params)
    if closing_shift.save
      render json: closing_shift, status: :created, root: 'closing_shift', serializer: ClosingShiftSerializer
    else
      render json: closing_shift.errors, status: :unprocessable_entity, root: 'closing_shift',
             serializer: ClosingShiftSerializer
    end
  end

  def update
    closing_shift = ClosingShift.find(closing_shift_params[:id])
    if closing_shift.update(closing_shift_params)
      render json: closing_shift, status: :ok, root: 'closing_shift', serializer: ClosingShiftSerializer
    else
      render json: closing_shift.errors, status: :unprocessable_entity, root: 'closing_shift',
             serializer: ClosingShiftSerializer
    end
  end

  def destroy
    closing_shift = ClosingShift.find(closing_shift_params[:id])
    if closing_shift.destroy
      render json: closing_shift, status: :ok, root: 'closing_shift', serializer: ClosingShiftSerializer
    else
      render json: {}, status: :bad_request
    end
  end

  private

  def closing_shift_params
    params.require(:closing_shift).permit( :id, :start_date, :end_date, :location_id)
  end
end
