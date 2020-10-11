class AddRetailAndStockControlToProducts < ActiveRecord::Migration[6.0]
  def change
    add_column :products, :retail, :boolean, default: true
    add_column :products, :stock_control, :boolean, default: true
  end
end
