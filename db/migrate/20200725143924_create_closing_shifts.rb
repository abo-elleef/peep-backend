class CreateClosingShifts < ActiveRecord::Migration[6.0]
  def change
    create_table :closing_shifts do |t|
      t.datetime :start_date
      t.datetime :end_date
      t.belongs_to :location

      t.timestamps
    end
  end
end
