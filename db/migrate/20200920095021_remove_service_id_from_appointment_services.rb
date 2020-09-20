class RemoveServiceIdFromAppointmentServices < ActiveRecord::Migration[6.0]
  def change
    remove_column :appointment_services, :service_id
  end
end
