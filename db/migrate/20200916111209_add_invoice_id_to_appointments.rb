class AddInvoiceIdToAppointments < ActiveRecord::Migration[6.0]
  def change
    add_column :appointments, :invoice_id, :integer
  end
end
