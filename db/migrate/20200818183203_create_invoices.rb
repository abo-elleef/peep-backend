class CreateInvoices < ActiveRecord::Migration[6.0]
  def change
    create_table :invoices do |t|
      t.string :sequence
      t.float :subtotal_price
      t.float :total_price
      t.float :balance
      t.timestamps
    end
  end
end
