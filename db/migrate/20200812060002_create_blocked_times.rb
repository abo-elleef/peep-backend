class CreateBlockedTimes < ActiveRecord::Migration[6.0]
  def change
    create_table :blocked_times do |t|
      t.integer :staff_id
      t.datetime :start_at
      t.datetime :end_at
      t.text :reason
      t.timestamps
    end
  end
end
