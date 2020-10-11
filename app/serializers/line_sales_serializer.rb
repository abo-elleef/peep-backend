class LineSalesSerializer < ActiveModel::Serializer
  attributes :id, :appointment_id, :staff_id, :client_id, :service_name, :duration,
             :staff_name, :starts_at, :ends_at, :client_name, :location_name, :status, :price

  def status
    object.appointment.status
  end

  def client_id
    object.appointment&.client&.id
  end

  def location_name
    object.appointment&.location&.name
  end

  def client_name
    object.appointment&.client.try(:name)
  end

  def staff_name
    object.staff&.name
  end

  def service_name
    object.service&.name
  end

  def price
    object.service_price.price
  end

end