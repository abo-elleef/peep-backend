class ShiftSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :starts_at, :ends_at, :staff_id, :location_id, :parent_id, :repeat,
             :repeat_ends_at

  attribute :day do |serializer|
    serializer.object.starts_at.wday
  end
  attribute :staff_name do |serializer|
    serializer.object.staff.name
  end
  attribute :booking_color do |serializer|
    serializer.object.staff.booking_color
  end
end

