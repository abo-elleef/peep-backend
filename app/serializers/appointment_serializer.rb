class AppointmentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :status, :client_id, :notes, :date, :created_at
end
