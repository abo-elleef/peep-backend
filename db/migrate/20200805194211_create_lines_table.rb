class CreateLinesTable < ActiveRecord::Migration[6.0]
  def change
    create_table :lines do |t|
      t.integer :appointment_id
      t.integer :staff_id
      t.integer :service_id
      t.float :price
      t.float :original_price
      t.string :staff_name
      t.string :service_name
      t.datetime :starts_at
      t.datetime :ends_at
      t.timestamps
      t.index :appointment_id
      t.index :staff_id
      t.index :service_id
    end
  end
end
