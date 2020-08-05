class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.integer :status
      t.integer :client_id
      t.text :notes
      t.date :date

      t.timestamps
    end
    add_index :appointments, :client_id
    add_index :appointments, :date
  end
end
