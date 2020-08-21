class CreateDeducationUsageTable < ActiveRecord::Migration[6.0]
  def change
    create_table :deduction_usages do |t|
      t.integer :line_id
      t.integer :deduction_id
      t.integer :client_id
      t.timestamps

      t.index :line_id
      t.index :deduction_id
      t.index :client_id
    end
  end
end
