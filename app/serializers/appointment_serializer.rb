class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :status, :client_id, :location_id, :notes, :date,
             :created_at, :cancellation_reason_id, :starts_at, :ends_at
  has_many :appointment_services
  has_many :service_prices
end
