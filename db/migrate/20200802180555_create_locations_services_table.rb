class CreateLocationsServicesTable < ActiveRecord::Migration[6.0]
  def change
    create_table :locations_services do |t|
      t.integer :service_id
      t.integer :location_id
    end
    add_index :locations_services, :location_id
    add_index :locations_services, :service_id
  end
end
