class CreateSubscriptinoServicePricesTable < ActiveRecord::Migration[6.0]
  def change
    create_table :service_prices_subscriptions do |t|
      t.integer :subscription_id, index: true
      t.integer :service_price_id, index: true
    end
  end
end
