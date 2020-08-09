class CreateAppointmentsStaffTable < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments_staffs do |t|
      t.integer :appointment_id
      t.integer :staff_id
      t.timestamps
    end
    add_index :appointments_staffs, :appointment_id
    add_index :appointments_staffs, :staff_id
  end
end
