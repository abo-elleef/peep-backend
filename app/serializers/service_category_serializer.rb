class ServiceCategorySerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :name, :appointment_color, :description
  has_many :services, serializer: ServiceSerializer
end
