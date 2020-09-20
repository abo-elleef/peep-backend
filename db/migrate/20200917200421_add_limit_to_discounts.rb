class AddLimitToDiscounts < ActiveRecord::Migration[6.0]
  def change
    add_column :discounts, :limit, :integer, default: 1
  end
end
