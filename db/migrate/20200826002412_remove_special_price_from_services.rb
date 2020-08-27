class RemoveSpecialPriceFromServices < ActiveRecord::Migration[6.0]
  def change
    remove_column :service_prices, :special_price
  end
end
