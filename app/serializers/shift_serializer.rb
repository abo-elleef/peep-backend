class ShiftSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :start_time, :end_time, :staff_name
  attribute :staff_name do |object|
    object.staff.name
  end
end
