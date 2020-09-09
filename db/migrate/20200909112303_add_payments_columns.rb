class AddPaymentsColumns < ActiveRecord::Migration[6.0]
  def change
    add_column :payments, :invoice_id, :integer
    add_column :payments, :staff_id, :integer
  end
end
