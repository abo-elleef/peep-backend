class AddLocationIdToOrder < ActiveRecord::Migration[6.0]
  def change
    add_column :orders, :location_id, :integer
    add_index :orders, :location_id
  end
end
