class AddSupplierIdToProducts < ActiveRecord::Migration[6.0]
  def change
    add_column :products, :supplier_id, :integer
    add_index :products, :supplier_id
  end
end
