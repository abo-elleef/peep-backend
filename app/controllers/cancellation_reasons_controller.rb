class CancellationReasonsController < ApplicationController

  def index
    cancellation_reasons = CancellationReason.peep_filter(params.slice(:search, :name))
    render json: {data: cancellation_reasons}, each_serializer: CancellationReasonSerializer,
           status: :ok
  end

  def show
    cancellation_reason = CancellationReason.find(params[:id])
    render json: {data: cancellation_reason}, each_serializer: CancellationReasonSerializer,
           status: :ok
  end

  def create
    cancellation_reason = CancellationReason.new(cancellation_reason_params)
    if cancellation_reason.save
      render json: {data: cancellation_reason}, each_serializer: CancellationReasonSerializer,
             status: :created
    else
      render json: cancellation_reason.errors, status: :unprocessable_entity
    end
  end

  def update
    cancellation_reason = CancellationReason.find(params[:id])
    if cancellation_reason.update(cancellation_reason_params)
      render json: {data: cancellation_reason}, each_serializer: CancellationReasonSerializer,
             status: :ok
    else
      render json: cancellation_reason.errors, status: :unprocessable_entity
    end
  end

  def destroy
    cancellation_reason = CancellationReason.find(params[:id])
    if cancellation_reason.destroy
      render json: {}, status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private

  def cancellation_reason_params
    params.require(:cancellation_reason).permit(:name)
  end
end
