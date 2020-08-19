class AddRetailAndStockControlToProducts < ActiveRecord::Migration[6.0]
  def change
    add_column :products, :retail, :boolean
    add_column :products, :stock_control, :boolean
  end
end
