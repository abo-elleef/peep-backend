class EditAppointmentsServicesTable < ActiveRecord::Migration[6.0]
  def change
    add_column :appointments_services, :staff_id, :integer
  end
end
