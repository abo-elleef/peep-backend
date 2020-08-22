class ProductSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :barcode, :sku, :product_category_id, :product_brand_id,
             :description, :retail_price, :special_price, :enable_commission, :supplier_id,
             :supply_price, :updated_at, :retail, :stock_control
  has_many :locations_products, serializer: LocationsProductSerializer
end
