class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :status, :client_id, :location_id, :notes, :date,
             :created_at, :cancellation_reason_id, :starts_at, :ends_at, :total

  def total
    object.service_prices.map(&:price).compact.sum
  end

  has_many :appointment_services
  has_many :service_prices
end
