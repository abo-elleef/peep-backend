class VoucherTypesController < ApplicationController

  def index
    voucher_types = VoucherType.peep_filter(params.slice(:name)).desc_order
    serializers = ActiveModel::Serializer::ArraySerializer.new(voucher_types, each_serializer: VoucherTypeSerializer)
    render json: {data: serializers}, status: :ok
  end

  def show
    voucher_type = VoucherType.find(params[:id])
    render json: {data: VoucherTypeSerializer.new(voucher_type)}, status: :ok
  end

  def create
    voucher_type = VoucherType.new(voucher_type_params)
    if voucher_type.save
      services = params[:services_ids].empty? ? Service.all : Service.where(id: params[:services_ids])
      voucher_type.services << services
      render json: {data: VoucherTypeSerializer.new(voucher_type)}, status: :created
    else
      render json: voucher_type.errors, status: :unprocessable_entity
    end
  end

  def update
    voucher_type = VoucherType.find(params[:id])
    if voucher_type.update(voucher_type_params)
      render json: {data: VoucherTypeSerializer.new(voucher_type)}, status: :ok
    else
      render json: voucher_type.errors, status: :unprocessable_entity
    end
  end

  def destroy
    voucher_type = VoucherType.find(params[:id])
    if voucher_type.destroy
      render json: {}, status: :ok
    else
      render json: {}, status: :bad_request
    end
  end


  private


  def voucher_type_params
    params.require(:voucher_type).permit(
        :name, :value, :price, :sales_amount,
        :sold_amount, :expire, :expiring_reason, :title, :desc, :notes,
        :color, :starts_at, :ends_at, :services_ids
    )
  end
end