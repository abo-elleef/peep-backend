class AddStartsAtEndsAtToDiscounts < ActiveRecord::Migration[6.0]
  def change
    add_column :discounts, :starts_at, :datetime
    add_column :discounts, :ends_at, :datetime
  end
end
