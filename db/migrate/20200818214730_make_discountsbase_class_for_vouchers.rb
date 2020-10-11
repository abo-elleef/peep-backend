class MakeDiscountsbaseClassForVouchers < ActiveRecord::Migration[6.0]
  def change
    rename_table :discounts, :deductions
    add_column :deductions, :type, :string
    #   Deduction.update_all(type: "Discount")
  end
end
