class MakeClosingShiftManyToLocations < ActiveRecord::Migration[6.0]
  def change
    remove_column :closing_shifts, :location_id
    create_table :closing_shifts_locations do |t|
      t.integer :location_id
      t.integer :closing_shift_id
    end
    add_index :closing_shifts_locations, :location_id
    add_index :closing_shifts_locations, :closing_shift_id
  end
end
