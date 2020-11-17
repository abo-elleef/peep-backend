class PaymentTypesController < ApplicationController
  layout :resolve_layout
  def index
    payment_types = PaymentType.peep_filter(params.slice(:search, :name))
    serializers = ActiveModel::Serializer::ArraySerializer.new(payment_types, each_serializer: PaymentTypeSerializer)
    respond_to do |format|
      format.json { render json: { data: serializers },  status: :ok }
      format.js { @payment_types = payment_types }
      format.html { @payment_types = payment_types }
    end
  end

  def show
    payment_type = PaymentType.find(params[:id])
    render json: {data: PaymentTypeSerializer.new(payment_type)}, status: :ok
  end

  def create
    payment_type = PaymentType.new(payment_type_params)
    if payment_type.save
      render json: {data: PaymentTypeSerializer.new(payment_type)}, status: :created
    else
      render json: payment_type.errors, status: :unprocessable_entity
    end
  end

  def update
    payment_type = PaymentType.find(params[:id])
    if payment_type.update(payment_type_params)
      render json: {data: PaymentTypeSerializer.new(payment_type)}, status: :ok
    else
      render json: payment_type.errors, status: :unprocessable_entity
    end
  end

  def destroy
    payment_type = PaymentType.find(params[:id])
    if payment_type.destroy
      render json: {}, status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private

  def payment_type_params
    params.require(:payment_type).permit(:name)
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