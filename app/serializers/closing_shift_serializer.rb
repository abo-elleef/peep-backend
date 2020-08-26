class ClosingShiftSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :starts_at, :ends_at, :desc, :location_ids

  attribute :number_of_days do |serializer|
    ((serializer.object.ends_at - serializer.object.starts_at) / ( 60 * 60 * 24 )).to_i
  end

  # TODO:// this should be removed when location crud is complete in backend and frontend
  attribute :locations do |serializer|
    serializer.object.locations.pluck(:name)
  end
end
