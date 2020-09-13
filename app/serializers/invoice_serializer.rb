class InvoiceSerializer < ActiveModel::Serializer
  attributes :id, :status, :client_name, :client_id, :location_name,
             :created_at, :tips, :total


  def client_name
    object.appointment&.client&.name
  end

  def client_id
    object.appointment&.client&.id
  end

  def location_name
    object.appointment&.location&.name
  end

  def status
    object.appointment.status
  end

  def tips
    object.appointment.tips.map(&:value).sum
  end

  def total
    object.appointment.lines.map(&:price).sum
  end
end
