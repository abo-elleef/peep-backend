class AddDiscountsServicePricesTable < ActiveRecord::Migration[6.0]
  def change
    create_table :discounts_service_prices do |t|
      t.integer :discount_id, index: true
      t.integer :service_price_id, index: true
    end
  end
end
