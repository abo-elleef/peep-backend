class ShiftsController < ApplicationController

  def index
    # TODO add index for location_id
    # TODO add compained index for location id and staff_id
    shifts = Shift.includes(:staff).peep_filter(params.slice(:location_id, :staff_id, :datetime))
    render json: ShiftSerializer.new(shifts), status: :ok
  end

  def show
    shift = Shift.find(params[:id])
    render json: ShiftSerializer.new(shift), status: :ok
  end

  def create
    shift = Shift.new(shift_params)
    if shift.save
      render json: ShiftSerializer.new(shift), status: :created
    else
      render json: shift.errors, status: :unprocessable_entity
    end
  end

  def update
    shift = Shift.find(params[:id])
    if shift.update(shift_params)
      render json: ShiftSerializer.new(shift), status: :ok
    else
      render json: shift.errors, status: :unprocessable_entity
    end
  end

  def destroy
    shift = Shift.find(params[:id])
    if shift.destroy
      render json: ShiftSerializer.new(shift), status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private

    def shift_params
      params.require(:shift).permit(:id, :day, :start_time, :end_time, :staff)
    end
end
