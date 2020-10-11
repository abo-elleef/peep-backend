class RemoveExtraOldColumns < ActiveRecord::Migration[6.0]
  def change
    remove_column :tips, :appointment_id, :integer
    remove_column :payments, :appointment_id, :integer
    remove_column :invoices, :invoiceable_type, :string
    remove_column :invoices, :invoiceable_id, :integer
    remove_column :invoices, :appointment_id,:integer
  end
end
