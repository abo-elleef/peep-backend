class OrderSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :status, :total_cost, :supplier_id
  has_many :items, serializer: ItemSerializer
end
