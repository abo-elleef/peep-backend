class CreateOrderTable < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.integer :status
      t.float :total_cost
      t.integer :supplier_id
      t.timestamps

      t.index :supplier_id
    end
  end
end
