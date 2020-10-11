class CreateJoinTablePackagesAndServicePrices < ActiveRecord::Migration[6.0]
  def change
    create_join_table :packages, :service_prices do |t|
      t.index :package_id
      t.index :service_price_id
    end
  end
end
