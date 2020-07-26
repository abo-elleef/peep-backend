class ClosingShiftSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :day, :start_date, :end_date
end
