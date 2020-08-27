class LineSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :appointment_id, :staff_id, :service_id, :service_price_id,
             :price_name, :price, :original_price, :staff_name, :staff_name, :starts_at,
             :ends_at
  attribute :color do |serializer|
    serializer.object.staff.booking_color
  end
  attribute :client_name do |serializer|
    serializer.object.client.try(:name)
  end
end
