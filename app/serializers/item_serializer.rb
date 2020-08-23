class ItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :requested_price, :received_price, :received_quantity, :requested_quantity, :order_id
end
