class ServiceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :description,
             :available_for, :staff_commission, :extra_time, :extra_time_type, :extra_time_duration, :service_category_id
  has_many :service_prices
end