class AppointmentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :status, :client_id, :location_id, :notes, :date, :created_at
  has_many :lines
end