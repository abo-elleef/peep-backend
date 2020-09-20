class LineSerializer < ActiveModel::Serializer
  attributes :id, :invoice_id, :staff_id, :sellable_id, :sellable_type,
             :unit_price, :original_unit_price, :staff_name, :quantity

  belongs_to :sellable, polymorphic: true
  has_one :discount_usage, serializer: DiscountUsageSerializer

  attribute :color do |serializer|
    serializer.object.staff.booking_color
  end

end
