class AddServicePriceIdToLines < ActiveRecord::Migration[6.0]
  def change
    add_column :lines, :service_price_id, :integer
  end
end
