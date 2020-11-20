class CancellationReasonsController < ApplicationController

  layout :resolve_layout
  def index
    cancellation_reasons = CancellationReason.peep_filter(params.slice(:search, :name))
    respond_to do |format|
      format.json {
        serializers = ActiveModel::Serializer::ArraySerializer.new(cancellation_reasons, each_serializer: CancellationReasonSerializer)
        render json: {data: serializers},  status: :ok
      }
      format.html { @cancellation_reasons = cancellation_reasons }
    end
  end

  def new
    @cancellation_reason = CancellationReason.new
  end

  def edit
    @cancellation_reason = CancellationReason.find params[:id]
  end
  def show
    cancellation_reason = CancellationReason.find(params[:id])
    render json: {data: CancellationReasonSerializer.new(cancellation_reason)}, status: :ok
  end

  def create
    cancellation_reason = CancellationReason.new(cancellation_reason_params)
    if cancellation_reason.save
      # render json: {data: CancellationReasonSerializer.new(cancellation_reason)}, status: :created
    else
      render json: cancellation_reason.errors, status: :unprocessable_entity
    end
  end

  def update
    cancellation_reason = CancellationReason.find(params[:id])
    if cancellation_reason.update(cancellation_reason_params)
      # render json: {data: CancellationReasonSerializer.new(cancellation_reason)}, status: :ok
    else
      render json: cancellation_reason.errors, status: :unprocessable_entity
    end
  end

  def destroy
    cancellation_reason = CancellationReason.find(params[:id])
    if cancellation_reason.destroy
      # render json: {}, status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private

  def cancellation_reason_params
    params.require(:cancellation_reason).permit(:name)
  end
  def resolve_layout
    case action_name
    when "new", "edit", "update", "create"
      "forms"
    else
      "dash"
    end
  end
end
