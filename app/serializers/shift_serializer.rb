class ShiftSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :day, :start_time, :end_time
end
