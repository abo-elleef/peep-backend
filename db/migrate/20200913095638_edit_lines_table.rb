class EditLinesTable < ActiveRecord::Migration[6.0]
  def change
    add_column :lines, :invoice_id, :integer
    rename_column :lines, :price, :unit_price
    rename_column :lines, :original_price, :original_unit_price
    remove_column :lines, :client_id, :integer
    remove_column :lines, :appointment_id, :integer
    remove_column :lines, :service_id, :integer
    remove_column :lines, :service_name, :string

  end
end
