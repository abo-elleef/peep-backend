class AddCommissionColumnsToStaff < ActiveRecord::Migration[6.0]
  def change
    add_column :staffs, :product_comm, :float, default: 0.0
    add_column :staffs, :discount_comm, :float, default: 0.0
    add_column :staffs, :service_comm, :float, default: 0.0
  end
end
