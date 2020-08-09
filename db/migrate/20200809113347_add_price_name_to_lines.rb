class AddPriceNameToLines < ActiveRecord::Migration[6.0]
  def change
    add_column :lines, :price_name, :string
  end
end
