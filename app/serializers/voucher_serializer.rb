class VoucherSerializer < ActiveModel::Serializer
  attributes :id, :code, :voucher_type_id,  :current_value, :expire, :invoice_id

end