class LineSalesSerializer < ActiveModel::Serializer
  attributes :id, :appointment_id, :staff_id, :service_id, :client_id, :service_name,
             :staff_name, :starts_at, :ends_at, :client_name, :location_name, :status

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

end