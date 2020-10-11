class CreateVoucherUsages < ActiveRecord::Migration[6.0]
  def change
    create_table :voucher_usages do |t|
      t.integer :voucher_id
      t.integer :client_id
      t.integer :usable_id
      t.string :usable_type
      t.timestamps

      t.index :voucher_id
      t.index :client_id
      t.index :usable_id
      t.index :usable_type
    end
  end
end
