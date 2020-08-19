class AddVoucherColumns < ActiveRecord::Migration[6.0]
  def change
    add_column :deductions, :start_value, :float
    add_column :deductions, :current_value, :float
  end
end