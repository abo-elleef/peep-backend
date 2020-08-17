class AddDetailsToProducts < ActiveRecord::Migration[6.0]
  def change
    remove_column :products, :tax_included

    add_index :products, :name
    add_index :products, :barcode
    add_index :products, :sku
    add_index :products, :product_category_id
    add_index :products, :product_brand_id
  end
end
