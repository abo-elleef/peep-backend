class CreatePackages < ActiveRecord::Migration[6.0]
  def change
    create_table :packages do |t|
      t.string :name
      t.text :description
      t.integer :available_for
      t.integer :pricing_type
      t.float :deduction_amount
      t.float :final_price
      t.integer :schedule_type
      t.timestamps
    end
  end
end
