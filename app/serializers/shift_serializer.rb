class ShiftSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :start_time, :end_time
  attribute :staff_name do |object|
    object.staff.name
  end
end
