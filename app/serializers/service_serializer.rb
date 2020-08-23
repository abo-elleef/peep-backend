class ServiceSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :name, :description, :available_for, :staff_commission,
             :extra_time, :extra_time_type, :extra_time_duration, :service_category_id
  attribute :category_name do |object|
    object.object.service_category&.name
  end

  has_many :service_prices, serializer: ServicePriceSerializer
end
