class ServiceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :treatment_type, :description, :available_for, :online_booking,
             :staff_commission, :extra_time
end
