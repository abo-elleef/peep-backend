class AddIndexToProductBrands < ActiveRecord::Migration[6.0]
  def change
    add_index :product_brands, :name
  end
end
