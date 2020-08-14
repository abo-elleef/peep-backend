class ShiftSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :start_time, :end_time

  attribute :day do |object|
    object.start_time.wday
  end
  attribute :staff_name do |object|
    object.staff.name
  end
end
