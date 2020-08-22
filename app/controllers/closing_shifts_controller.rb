class ClosingShiftsController < ApplicationController

  def index
    closing_shifts = ClosingShift.preload(:locations).peep_filter(params.slice(:location_id))
    serializers = ActiveModel::Serializer::ArraySerializer.new(closing_shifts, each_serializer: ClosingShiftSerializer)
    render json: {data: serializers},  status: :ok
  end

  def show
    closing_shift = ClosingShift.find(params[:id])
    render json: {data: ClosingShiftSerializer.new(closing_shift)}, status: :ok
  end

  def create
    closing_shift = ClosingShift.new(closing_shift_params)
    if closing_shift.save
      render json: {data: ClosingShiftSerializer.new(closing_shift)}, status: :created
    else
      render json: closing_shift.errors, status: :unprocessable_entity
    end
  end

  def update
    closing_shift = ClosingShift.find(params[:id])
    if closing_shift.update(closing_shift_params)
      render json: {data: ClosingShiftSerializer.new(closing_shift)}, status: :ok
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
