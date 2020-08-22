class BlockedTimesController < ApplicationController

  def index
    blocked_times = BlockedTime.peep_filter(params.slice(:staff_id))
    render json: {data: blocked_times}, each_serializer: BlockedTimeSerializer,  status: :ok
  end

  def show
    blocked_time = BlockedTime.find(params[:id])
    render json: {data: blocked_time}, each_serializer: BlockedTimeSerializer, status: :ok
  end

  def create
    blocked_time = BlockedTime.new(blocked_time_params)
    if blocked_time.save
      render json: {data: blocked_time}, each_serializer: BlockedTimeSerializer, status: :created
    else
      render json: blocked_time.errors, status: :unprocessable_entity
    end
  end

  def update
    blocked_time = BlockedTime.find(params[:id])
    if blocked_time.update(blocked_time_params)
      render json: {data: blocked_time}, each_serializer: BlockedTimeSerializer, status: :ok
    else
      render json: blocked_time.errors, status: :unprocessable_entity
    end
  end

  def destroy
    blocked_time = BlockedTime.find(params[:id])
    if blocked_time.destroy
      render json: {}, status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private

  def blocked_time_params
    params.require(:blocked_time).permit(
        :id, :starts_at, :ends_at, :reason, :staff_id)
  end
end
