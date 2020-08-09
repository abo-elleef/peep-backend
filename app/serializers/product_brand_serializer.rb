class ProductBrandSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name
end
