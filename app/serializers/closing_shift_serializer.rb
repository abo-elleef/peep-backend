class ClosingShiftSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :start_date, :end_date, :number_of_days, :location_ids, :desc

  attribute :number_of_days do |object|
    ((object.end_date - object.start_date) / ( 60 * 60 * 24 )).to_i
  end
end
