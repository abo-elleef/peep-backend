class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :status, :client_id, :location_id, :notes, :date, :client_name, :invoice_id,
             :created_at, :cancellation_reason_id, :starts_at, :ends_at, :total, :color

  def total
    object.service_prices.map(&:price).compact.sum
  end

  def color
    object.service_prices.first&.service&.service_category&.appointment_color || 'red'
  end

  def client_name
    object.client&.name
  end

  has_many :appointment_services , serializer: AppointmentServiceDetailsSerializer
  has_many :service_prices
end
