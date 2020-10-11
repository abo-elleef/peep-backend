class RemoveNotUsedColumnsProducts < ActiveRecord::Migration[6.0]
  def change
    remove_column :products,  :initial_stock
    remove_column :products,  :reorder_point
    remove_column :products,  :reorder_quantity
  end
end
