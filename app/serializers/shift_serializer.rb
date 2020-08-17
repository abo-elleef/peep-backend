class ShiftSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :starts_at, :ends_at, :staff_id, :location_id

  attribute :day do |object|
    object.starts_at.wday
  end
  attribute :staff_name do |object|
    object.staff.name
  end
  attribute :booking_color do |object|
    object.staff.booking_color
  end
end
