class EditDeductionsTableToDiscounts < ActiveRecord::Migration[6.0]
  def change
    rename_table :deductions, :discounts
    add_column :discounts, :active, :boolean
    remove_column :discounts, :current_value, :float
    remove_column :discounts, :start_value, :float
    remove_column :discounts, :type, :string
    remove_column :discounts, :usage_limit, :integer
    remove_column :discounts, :starts_at
    remove_column :discounts, :ends_at
  end
end
