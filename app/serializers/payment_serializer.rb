class PaymentSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :appointment_id, :payment_type_id, :amount
end