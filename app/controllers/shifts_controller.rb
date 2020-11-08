class ShiftsController < ApplicationController

  def index
    # TODO add index for location_id
    # TODO add compained index for location id and staff_id
    params[:date] ||= Time.zone.now.to_s
    params[:starts_at] = Time.zone.parse(params[:date]).beginning_of_week
    params[:ends_at] = Time.zone.parse(params[:date]).end_of_week
    @start_date = Time.zone.parse(params[:date]).beginning_of_week
    @staff = Staff.all
    @shifts = Shift.includes(:staff).peep_filter(params.slice(:location_id, :staff_id, :starts_at, :ends_at))
    respond_to do |format|
      format.js
      format.html

    end
    # serializers = ActiveModel::Serializer::ArraySerializer.new(shifts, each_serializer: ShiftSerializer)
    # render json: {data: serializers},  status: :ok
  end


  def new
    @shift = Shift.new
  end

  def edit
    @shift = Shift.find params[:id]
  end

  def show
    shift = Shift.find(params[:id])
    render json: {data: ShiftSerializer.new(shift)}, status: :ok
  end

  def create
    shift = Shift.new(shift_params)
    if shift.save
      render json: {data: ShiftSerializer.new(shift)}, status: :created
    else
      render json: shift.errors, status: :unprocessable_entity
    end
  end

  def update
    shift = Shift.find(params[:id])
    if shift.update(shift_params)
      render json: {data: ShiftSerializer.new(shift)}, status: :ok
    else
      render json: shift.errors, status: :unprocessable_entity
    end
  end

  def destroy
    shift = Shift.find(params[:id])
    if shift.destroy
      render json: {}, status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private

  def shift_params
    params.require(:shift).permit(
        :id, :starts_at, :ends_at, :staff_id, :location_id, :parent_id, :repeat,
        :repeat_ends_at
    )
  end
end