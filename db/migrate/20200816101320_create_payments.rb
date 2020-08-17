class CreatePayments < ActiveRecord::Migration[6.0]
  def change
    create_table :payments do |t|
      t.integer :appointment_id
      t.integer :payment_type_id
      t.float :amount
      t.timestamps
      t.index :appointment_id
      t.index :payment_type_id
    end
  end
end
