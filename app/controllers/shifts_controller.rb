class ShiftsController < ApplicationController

  def index
    shifts = Shift.all
    render json: shifts,status: :ok, root: 'shifts', serializer: ShiftSerializer
  end

  def show
    shift = Shift.find(shift_params[:id])
    render json: shift, status: :ok, root: 'shift', serializer: ShiftSerializer
  end

  def create
    shift = Shift.new(shift_params)
    if shift.save
      render json: shift, status: :created, root: 'shift', serializer: ShiftSerializer
    else
      render json: shift.errors, status: :unprocessable_entity ,root: 'shift',
             serializer: ShiftSerializer
    end
  end

  def update
    shift = Shift.find(shift_params[:id])
    if shift.update(shift_params)
      render json: shift, status: :ok, root: 'shift', serializer: ShiftSerializer
    else
      render json: shift.errors, status: :unprocessable_entity ,root: 'shift',
             serializer: ShiftSerializer
    end
  end

  def destroy
    shift = Shift.find(shift_params[:id])
    if shift.destroy
      render json: shift, status: :ok, root: 'shift', serializer: ShiftSerializer
    else
      render json: {}, status: :bad_request
    end
  end

  private

    def shift_params
      params.require(:shift).permit(:id, :day, :start_time, :end_time, :staff)
    end
end
