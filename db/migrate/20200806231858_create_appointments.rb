class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.text :notes
      t.integer :status
      t.integer :client_id
      t.integer :location_id
      t.datetime :start_time
      t.datetime :end_time
      t.jsonb :details, null: false, default: '{}'
      t.timestamps
    end
    add_index :appointments, :details, using: :gin
    add_index :appointments, :client_id
    add_index :appointments, :location_id
  end
end
