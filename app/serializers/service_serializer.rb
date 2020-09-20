class ServiceSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :name, :description, :available_for, :staff_commission,
             :extra_time, :extra_time_type, :extra_time_duration, :service_category_id, :staff_ids

  attribute :category_name do |serializer|
    serializer.object.service_category&.name
  end

  attribute :appointment_color do |serializer|
    serializer.object&.service_category&.appointment_color
  end

  has_many :service_prices, serializer: ServicePriceSerializer
end
