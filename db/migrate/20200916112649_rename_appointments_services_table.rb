class RenameAppointmentsServicesTable < ActiveRecord::Migration[6.0]
  def change
    rename_table :appointments_services, :appointment_services
  end
end
