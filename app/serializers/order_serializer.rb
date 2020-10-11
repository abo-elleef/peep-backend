class OrderSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :status, :total_cost, :supplier_id, :location_id, :created_at, :updated_at
  attribute :location_name do |serializer|
    serializer.object.location.name
  end

  attribute :supplier_name do |serializer|
    serializer.object.supplier.name
  end
  has_many :items, each_serializer: ItemSerializer
end
