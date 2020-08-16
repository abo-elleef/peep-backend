class ClosingShiftSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :starts_at, :ends_at, :desc, :location_ids

  attribute :number_of_days do |object|
    ((object.ends_at - object.starts_at) / ( 60 * 60 * 24 )).to_i
  end

  # TODO:// this should be removed when location crud is complete in backend and frontend
  attribute :locations do |object|
    object.locations.pluck(:name)
  end
end
