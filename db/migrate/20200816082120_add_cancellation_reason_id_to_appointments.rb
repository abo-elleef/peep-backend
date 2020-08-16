class AddCancellationReasonIdToAppointments < ActiveRecord::Migration[6.0]
  def change
    add_column :appointments, :cancellation_reason_id, :integer
    add_index :appointments, :cancellation_reason_id
  end
end
