class VoucherTypesController < ApplicationController

  def index
    voucher_types = VoucherType.peep_filter(params.slice([:name]))
    serializers = ActiveModel::Serializer::ArraySerializer.new(voucher_types, each_serializer: VoucherTypeSerializer)
    render json: {data: serializers},  status: :ok
  end

  def show
    voucher_type = VoucherType.find(params[:id])
    render json: {data: VoucherTypeSerializer.new(voucher_type)}, status: :ok
  end

  def create
    voucher_type = VoucherType.new(voucher_type_params)
    if voucher_type.save
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

  def sell_voucher
    # {
    #     voucher_type_id:  voucher_type_id,
    #     quantity: 2,
    #     payments_attributes: [
    #         {
    #             payment_type_id: 1,
    #             amount: 12
    #         }
    # }
    # 1-  Generate Voucher Code voucher_code
    # VoucherType.generate_voucher_code
    # Digest::MD5.hexdigest "#{SecureRandom.hex(10)}-#{DateTime.now.to_s}"
    #  2- Create Voucher record  {code: voucher_code, current_value: voucher_type.value, voucher_type_id: voucher_type.id }
    #  3-
  end

  private
  def voucher_type_params
    params.require(:voucher_type).permit(
        :name,  :value, :price, :sales_amount,
        :sold_amount, :expire, :expiring_reason, :title, :desc, :notes,
        :color, :starts_at, :ends_at
    )
  end
end