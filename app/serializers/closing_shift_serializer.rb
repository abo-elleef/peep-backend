class ClosingShiftSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :starts_at, :ends_at, :desc, :location_ids, :locations, :number_of_days

  def locations
    object.locations.pluck(:name)
  end

  def number_of_days
    (((object.ends_at - object.starts_at).to_f / ( 60 * 60 * 24 ))).ceil
  end
end
