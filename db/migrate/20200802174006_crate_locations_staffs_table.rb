class CrateLocationsStaffsTable < ActiveRecord::Migration[6.0]
  def change
    create_table :locations_staffs do |t|
      t.integer :location_id
      t.integer :staff_id
    end
    add_index :locations_staffs, :location_id
    add_index :locations_staffs, :staff_id
  end
end
