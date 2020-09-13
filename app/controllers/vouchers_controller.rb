class VoucherController < ApplicationController

  def check_voucher_validity
    voucher = Voucher.find_by(code: params[:voucher_code].to_s)
    if voucher.present?
      result = voucher.expire? ? {expire: true, reason: voucher.expiring_reason, expiring_date: voucher.voucher_type.ends_at} : {expire: false, current_value: voucher.current_value, expiring_date: voucher.voucher_type.ends_at}
      render json: result, status: :ok
    else
      render json: voucher.errors, status: :not_exist
    end
  end

end