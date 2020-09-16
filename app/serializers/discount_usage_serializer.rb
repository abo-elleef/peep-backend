class DiscountUsageSerializer < ActiveModel::Serializer
  attributes :id, :discount_id, :line_id
end