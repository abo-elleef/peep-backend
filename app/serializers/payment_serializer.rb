class PaymentSerializer < ActiveModel::Serializer
  attributes :id, :payment_type_id, :amount, :invoice_id
end