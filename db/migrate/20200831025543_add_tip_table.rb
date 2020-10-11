class AddTipTable < ActiveRecord::Migration[6.0]
  def change
    create_table :tips do |t|
      t.integer :appointment_id
      t.integer :staff_id
      t.float :value
      t.index :appointment_id
      t.index :staff_id
    end
  end
end
