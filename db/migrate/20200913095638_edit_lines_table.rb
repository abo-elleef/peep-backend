class EditLinesTable < ActiveRecord::Migration[6.0]
  def change
    add_column :lines, :invoice_id, :integer
    rename_column :lines, :price, :unit_price
    rename_column :lines, :original_price, :original_unit_price
    remove_column :lines, :client_id, :integer
  end
end
