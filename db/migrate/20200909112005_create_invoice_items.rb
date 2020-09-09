class CreateInvoiceItems < ActiveRecord::Migration[6.0]
  def change
    create_table :invoice_items do |t|
      t.integer :invoice_id
      t.integer :payable_id
      t.string :payable_type
      t.integer :quantity
      t.float :unit_price
      t.float :original_unit_price
      t.integer :staff_id
    end
  end
end
