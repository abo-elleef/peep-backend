class CreateItemTable < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.integer :order_id
      t.float :received_price
      t.float :received_quantity
      t.float :requested_quantity
      t.float :requested_price
      t.timestamps

      t.index :order_id
    end
  end
end
