class LineSerializer
  include FastJsonapi::ObjectSerializer
  attributes :appointment_id, :staff_id, :service_id, :price_id, :price_name, :price, :original_price, :staff_name, :staff_name,
             :starts_at, :ends_at
end
