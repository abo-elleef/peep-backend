class ProductBrandSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :name, :updated_at

  attribute :products_count do |object|
    object.object.products.size
  end
end
