class AddPriceIdToLines < ActiveRecord::Migration[6.0]
  def change
    add_column :lines, :price_id, :string
    add_index :lines, :price_id
  end
end
