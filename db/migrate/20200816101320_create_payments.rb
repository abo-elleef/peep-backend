class CreatePayments < ActiveRecord::Migration[6.0]
  def change
    create_table :payments do |t|
      t.integer :appointment_id
      t.integer :pay_type, default: 1
      t.float :amount
      t.timestamps
      t.index :appointment_id
    end
  end
end
