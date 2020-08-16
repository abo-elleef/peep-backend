class AddCancellationIdToAppointments < ActiveRecord::Migration[6.0]
  def change
    add_column :appointments, :cancellation_id, :integer
  end
end
