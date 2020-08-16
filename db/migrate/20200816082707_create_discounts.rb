class CreateDiscounts < ActiveRecord::Migration[6.0]
  def change
    create_table :discounts do |t|
      t.string :name
      t.string :deduct_type
      t.float :deduct_value
      t.string :apply_on
      t.integer :usage_limit
      t.boolean :uniq_per_client, default: false
      t.datetime :starts_at
      t.datetime :ends_at
      t.timestamps

      t.index :name
    end
  end
end
