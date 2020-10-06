class LineSerializer < ActiveModel::Serializer
  attributes :id, :invoice_id, :staff_id, :sellable_id, :sellable_type,
             :unit_price, :original_unit_price, :staff_name, :quantity, :starts_at, :ends_at

  belongs_to :sellable, polymorphic: true
  has_one :discount_usage, serializer: DiscountUsageSerializer

  attribute :color do |serializer|
    serializer.object.staff.booking_color
  end

  def starts_at
    return nil unless object.sellable_type == 'ServicePrice'
    # object.invoice.appointment.appointment_services.find{ |obj| obj.service_price_id == object.sellable_id }&.starts_at
    object.invoice.appointment.appointment_services.first.starts_at
  end

  def ends_at
    return nil unless object.sellable_type == 'ServicePrice'
    # object.invoice.appointment.appointment_services.find{ |obj| obj.service_price_id == object.sellable_id }&.ends_at
    object.invoice.appointment.appointment_services.first.ends_at
  end

end
