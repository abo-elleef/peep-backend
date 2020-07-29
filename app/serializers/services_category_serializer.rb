class ServicesCategorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :appointment_color, :description
end
