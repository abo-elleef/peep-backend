class ProductBrandSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :updated_at

  attribute :products_count do |object|
    object.products.size
  end
end
