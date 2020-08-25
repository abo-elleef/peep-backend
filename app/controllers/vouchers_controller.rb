class VouchersController < ApplicationController

  def index
    vouchers = Voucher.peep_filter(params.slice([:name]))
    serializers = ActiveModel::Serializer::ArraySerializer.new(vouchers, each_serializer: VoucherSerializer)
    render json: {data: serializers},  status: :ok
  end

  def show
    voucher = Voucher.find(params[:id])
    render json: {data: VoucherSerializer.new(voucher)}, status: :ok
  end

  def create
    voucher = Voucher.new(voucher_params)
    if voucher.save
      render json: {data: VoucherSerializer.new(voucher)}, status: :created
    else
      render json: voucher.errors, status: :unprocessable_entity
    end
  end

  def update
    voucher = Voucher.find(params[:id])
    if voucher.update(voucher_params)
      render json: {data: VoucherSerializer.new(voucher)}, status: :ok
    else
      render json: voucher.errors, status: :unprocessable_entity
    end
  end

  def destroy
    voucher = Voucher.find(params[:id])
    if voucher.destroy
      render json: {}, status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private

  def voucher_params
    params.require(:voucher).permit(
        :name, :deduct_type, :deduct_value, :apply_on, :usage_limit,
        :uniq_per_client, :starts_at, :ends_at
    )
  end
end