class AppointmentServiceDetailsSerializer < ActiveModel::Serializer
  attributes :id,  :ends_at, :starts_at, :staff_name, :duration, :name, :price,
             :service_price_id, :discounted_price

  def name
    object.service_price.name
  end

  def price
    object.service_price.price
  end

  def discounted_price
    object.service_price.price
  end

  def duration
    now  = Time.zone.now
    Time.at((now + object.service_price.duration.to_f.minutes - now)).utc.strftime("%H:%M:%S")
  end

  def staff_name
    object.staff.name
  end
end

class AppointmentDetailsSerializer < ActiveModel::Serializer
  attributes :id, :status, :client_id, :location_id, :notes, :date,
             :created_at, :cancellation_reason_id, :starts_at, :ends_at
  has_many :appointment_services , serializer: AppointmentServiceDetailsSerializer

end


