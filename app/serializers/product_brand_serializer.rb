class ProductBrandSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :updated_at
  attribute :products_count do
    5
  end
end
