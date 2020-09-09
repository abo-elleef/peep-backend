class VoucherCreation
  attr_reader :voucher_items, :invoice_id

  def initialize(voucher_items, invoice_id)
    @voucher_items = voucher_items
    @invoice_id = invoice_id
  end

  def call
    voucher_items.map do |voucher_item|
      voucher_type = VoucherType.find(voucher_item[:payable_id])
      if voucher_type_available?(voucher_type, voucher_item[:quantity])
        create_vouchers(voucher_item, voucher_type)
      end
    end
  end

  private

  def voucher_type_available?(voucher_type, quantity)
    rest = voucher_type.sales_amount - voucher_type.sold_amount
    rest >= quantity && !voucher_type.expire?
  end

  def create_vouchers(voucher_item, voucher_type)
    voucher_item[:quantity].to_i.times do
      voucher_type.sold_amount += params[:quantity]
      voucher_code = generate_voucher_code
      Voucher.create(code: voucher_code, current_value: voucher_type.value, voucher_type_id: voucher_type.id, invoice_id: invoice_id)
      voucher_type.save!
    end
  end

  def generate_voucher_code
    Digest::MD5.hexdigest("#{SecureRandom.hex(8)}-#{DateTime.now.to_s}")[0, 8].upcase
  end

end