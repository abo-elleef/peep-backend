class CreateVouchers < ActiveRecord::Migration[6.0]
  def change
    create_table :vouchers do |t|
      t.integer :voucher_type_id
      t.string :code
      t.float :current_value
      t.boolean :expire
      t.integer :expiring_reason
      t.timestamps
    end
  end
end
