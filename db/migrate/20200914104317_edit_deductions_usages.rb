class EditDeductionsUsages < ActiveRecord::Migration[6.0]
  def change
    rename_table :deduction_usages, :discount_usages
    rename_column :discount_usages, :deduction_id, :discount_id
    remove_column :discount_usages, :client_id, :integer
  end
end
