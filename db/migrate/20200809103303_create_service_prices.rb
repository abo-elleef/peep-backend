class CreateServicePrices < ActiveRecord::Migration[6.0]
  def change
    create_table :service_prices do |t|
      t.integer :service_id
      t.string :name
      t.integer :duration
      t.integer :pricing_type
      t.float :price, default: 0
      t.float :special_price
      t.timestamps
    end
    add_index :service_prices, :service_id
  end
end
