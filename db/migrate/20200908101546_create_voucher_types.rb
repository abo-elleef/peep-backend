class CreateVoucherTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :voucher_types do |t|
      t.string :name
      t.float :value
      t.float :price
      t.integer :sales_amount
      t.integer :sold_amount, default: 0
      t.boolean :expire, default: false
      t.integer :expiring_reason
      t.string :title
      t.text :desc
      t.text :notes
      t.string :color
      t.datetime :starts_at
      t.datetime :ends_at
      t.timestamps
    end
  end
end
