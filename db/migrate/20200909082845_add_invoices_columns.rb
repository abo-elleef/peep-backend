class AddInvoicesColumns < ActiveRecord::Migration[6.0]
  def change
    add_column :invoices, :invoiceable_id, :integer
    add_column :invoices, :invoiceable_type, :string
    add_column :invoices, :status, :integer
    add_column :invoices, :notes, :text
    add_column :invoices, :client_id, :integer
    add_column :invoices, :location_id, :integer
    add_column :invoices, :sub_total, :float
    add_column :invoices, :total, :float
    add_column :invoices, :balance, :float
    add_index :invoices, :client_id
    add_index :invoices, :location_id
    add_index :invoices, :status
    add_index :invoices, :invoiceable_id
    add_index :invoices, :invoiceable_type
  end
end
