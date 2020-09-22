class ItemSerializer < ActiveModel::Serializer
  attributes :id, :requested_price, :received_price, :received_quantity, :requested_quantity,
             :order_id, :product_name, :product_id

  def product_name
    object.product.name
  end
end
