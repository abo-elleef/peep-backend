class ClosingShiftSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :start_date, :end_date, :number_of_days, :location_name, :desc

  attribute :number_of_days do |object|
    object.start_date.to_date - object.end_date.to_date
  end
  attribute :location_name do |object|
    object.location&.name
  end
end
