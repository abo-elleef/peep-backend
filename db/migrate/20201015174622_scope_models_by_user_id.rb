class ScopeModelsByUserId < ActiveRecord::Migration[6.0]
  def change
    add_column :clients, :user_id, :integer
    add_column :services, :user_id, :integer
    add_column :service_prices, :user_id, :integer
    add_column :service_categories, :user_id, :integer
    add_column :discounts, :user_id, :integer
    add_column :appointments, :user_id, :integer
    add_column :invoices, :user_id, :integer
    add_column :payment_types, :user_id, :integer
    add_column :cancellation_reasons, :user_id, :integer

    add_index :clients, :user_id
    add_index :services, :user_id
    add_index :service_prices, :user_id
    add_index :service_categories, :user_id
    add_index :discounts, :user_id
    add_index :appointments, :user_id
    add_index :invoices, :user_id
    add_index :payment_types, :user_id
    add_index :cancellation_reasons, :user_id

    remove_column :clients, :location_id, :integer
    user_id = User.first.id
    Client.update_all(user_id: user_id)
    Service.update_all(user_id: user_id)
    ServicePrice.update_all(user_id: user_id)
    ServiceCategory.update_all(user_id: user_id)
    Discount.update_all(user_id: user_id)
    Appointment.update_all(user_id: user_id)
    Invoice.update_all(user_id: user_id)
    PaymentType.update_all(user_id: user_id)
    CancellationReason.update_all(user_id: user_id)
    Location.update_all(user_id: user_id)
  end
end
