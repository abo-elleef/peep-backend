class ProductSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :barcode, :sku, :product_category_id, :product_brand_id,
             :description, :retail_price, :special_price, :enable_commission, :supplier_id,
             :supply_price, :initial_stock, :reorder_point, :reorder_quantity, :retail, :stock_control, :updated_at
end
