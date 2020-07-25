class CreateShifts < ActiveRecord::Migration[6.0]
  def change
    create_table :shifts do |t|
      t.integer :day
      t.time :start_time
      t.time :end_time
      t.belongs_to :staff
      t.belongs_to :location

      t.timestamps
    end
  end
end
