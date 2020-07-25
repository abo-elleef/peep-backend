class StaffSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :first_name, :last_name, :phone, :email, :booking_enabled,
             :booking_color, :title, :notes, :contract_start, :contract_end, :created_at,
             :updated_at
end
