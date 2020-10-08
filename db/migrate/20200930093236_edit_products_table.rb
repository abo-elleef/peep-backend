class EditProductsTable < ActiveRecord::Migration[6.0]
  def change
    remove_column :products, :initial_stock, :integer
    remove_column :products, :reorder_point, :integer
    remove_column :products, :reorder_quantity, :integer

  end
end
