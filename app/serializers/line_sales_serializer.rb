class LineSalesSerializer < ActiveModel::Serializer
  attributes :id, :appointment_id, :staff_id, :service_id, :client_id, :service_name,
             :sellable_id, :sellable_type, :sellable_name, :price, :original_price, :staff_name,
             :starts_at, :ends_at, :client_name, :location_name, :status

  def status
    object.appointment.status
  end

  def location_name
    object.appointment&.location&.name
  end

  def client_name
    object.client.try(:name)
  end

end