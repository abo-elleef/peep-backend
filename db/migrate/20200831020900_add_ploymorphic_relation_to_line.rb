class AddPloymorphicRelationToLine < ActiveRecord::Migration[6.0]
  def change
    add_column :lines, :sellable_type, :string
    add_column :lines, :sellable_id, :integer
    Line.where.not(service_price_id: nil).update_all(sellable_type: "ServicePrice")
    Line.update_all("sellable_id = service_price_id")
    remove_column :lines, :service_price_id
    rename_column :lines, :price_name, :sellable_name
  end
end
