class ShiftSerializer
  include FastJsonapi::ObjectSerializer
  attributes :day, :start_time, :end_time
end
