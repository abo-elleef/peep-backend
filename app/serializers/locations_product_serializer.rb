class LocationsProductSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :product_id, :location_id, :initial_stock, :reorder_point,
             :reorder_quantity, :created_at, :updated_at
  attribute :location_name do |serializer|
    serializer.object.location.name
  end
end
