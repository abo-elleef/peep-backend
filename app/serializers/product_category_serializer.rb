class ProductCategorySerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :name, :updated_at
  
  attribute :products_count do |serializer|
    serializer.object.products.size
  end
end
