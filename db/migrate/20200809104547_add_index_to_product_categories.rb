class AddIndexToProductCategories < ActiveRecord::Migration[6.0]
  def change
    add_index :product_categories, :name
  end
end
