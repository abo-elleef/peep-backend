class CreateClosingShifts < ActiveRecord::Migration[6.0]
  def change
    create_table :closing_shifts do |t|
      t.time :start_date
      t.time :end_date
      t.belongs_to :location

      t.timestamps
    end
  end
end
