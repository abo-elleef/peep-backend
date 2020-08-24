class ServiceSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :name, :description, :available_for, :staff_commission,
             :extra_time, :extra_time_type, :extra_time_duration, :service_category_id

  attribute :category_name do |serializer|
    serializer.object.service_category&.name
  end

  attribute :category_color do |serializer|
    serializer.object.service_category.appointment_color
  end

  has_many :service_prices, serializer: ServicePriceSerializer
end
