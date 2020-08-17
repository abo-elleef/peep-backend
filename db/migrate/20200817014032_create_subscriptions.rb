class CreateSubscriptions < ActiveRecord::Migration[6.0]
  def change
    create_table :subscriptions do |t|
      t.string :name
      t.text :desc
      t.datetime :starts_at
      t.integer :available_for, default: 0
      t.datetime :ends_at
      t.string :pricing_type
      t.float :pricing_value

      t.timestamps
    end
  end
end
