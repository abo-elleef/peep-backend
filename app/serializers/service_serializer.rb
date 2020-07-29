class ServiceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :treatment_type_id, :description,
             :available_for, :online_booking, :staff_commission, :extra_time, :extra_time_type, :extra_time_duration
end