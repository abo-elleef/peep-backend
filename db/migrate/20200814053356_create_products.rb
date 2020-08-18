class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :product_category_id
      t.integer :product_brand_id
      t.string :barcode
      t.string :sku
      t.text :description
      t.float :retail_price
      t.float :special_price
      t.float :supply_price
      t.integer :initial_stock
      t.integer :reorder_point
      t.integer :reorder_quantity
      t.boolean :tax_included
      t.boolean :enable_commission

      t.timestamps
    end
  end
end
