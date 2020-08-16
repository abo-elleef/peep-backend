class ClosingShiftSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :start_date, :end_date, :desc, :location_ids

  attribute :number_of_days do |object|
    ((object.end_date - object.start_date) / ( 60 * 60 * 24 )).to_i
  end

  # TODO:// this should be removed when location crud is complete in backend and frontend
  attribute :locations do |object|
    object.locations.pluck(:name)
  end
end
