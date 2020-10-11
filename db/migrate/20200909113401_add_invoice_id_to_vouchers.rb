class AddInvoiceIdToVouchers < ActiveRecord::Migration[6.0]
  def change
    add_column :vouchers, :invoice_id, :integer
  end
end
