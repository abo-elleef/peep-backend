class CreateAppointmentsServices < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments_services do |t|
      t.integer :appointment_id
      t.integer :service_id
      t.datetime :starts_at
      t.datetime :ends_at
      t.timestamps
    end
    add_index :appointments_services, :appointment_id
    add_index :appointments_services, :service_id
  end
end
