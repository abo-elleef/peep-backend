class AddProductIdToItems < ActiveRecord::Migration[6.0]
  def change
    add_column :items, :product_id, :integer
    add_index :items, :product_id
  end
end
