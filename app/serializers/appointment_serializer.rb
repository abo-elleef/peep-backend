class AppointmentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :status, :client_id, :location_id, :notes, :date,
             :created_at, :cancellation_id
  has_many :lines
  has_many :payments
end
