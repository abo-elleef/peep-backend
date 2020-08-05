class ServiceCategorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :appointment_color, :description
  has_many :services
end
