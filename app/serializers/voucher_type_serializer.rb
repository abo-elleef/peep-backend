class VoucherTypeSerializer < ActiveModel::Serializer
  attributes :id, :name,  :value, :price, :sales_amount,
             :sold_amount, :expire, :expiring_reason, :title, :desc, :notes,
             :color, :starts_at, :ends_at
end
