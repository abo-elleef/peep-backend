class AddServicePriceIdToAppointmentServices < ActiveRecord::Migration[6.0]
  def change
    add_column :appointments_services, :service_price_id, :integer
    add_index :appointments_services, :service_price_id
  end
end
