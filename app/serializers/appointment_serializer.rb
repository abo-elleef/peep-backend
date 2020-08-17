class AppointmentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :status, :client_id, :location_id, :notes, :date,
             :created_at, :cancellation_reason_id
  has_many :lines
end
