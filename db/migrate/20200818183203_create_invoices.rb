class CreateInvoices < ActiveRecord::Migration[6.0]
  def change
    create_table :invoices do |t|
      t.string :sequence
      t.integer :appointment_id
      t.timestamps
    end
  end
end