class AddTipsColumns < ActiveRecord::Migration[6.0]
  def change
    add_column :tips, :invoice_id, :integer
  end
end
