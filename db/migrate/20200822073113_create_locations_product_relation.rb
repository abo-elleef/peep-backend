class CreateLocationsProductRelation < ActiveRecord::Migration[6.0]
  def change
    create_table :locations_products do |t|
      t.integer :location_id
      t.integer :product_id
      t.float :initial_stock
      t.float :reorder_point
      t.float :reorder_quantity

      t.timestamps
      t.index :location_id
      t.index :product_id
    end
  end
end
