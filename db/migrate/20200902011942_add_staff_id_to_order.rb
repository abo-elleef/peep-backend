class AddStaffIdToOrder < ActiveRecord::Migration[6.0]
  def change
    add_column :orders, :staff_id, :integer
    add_index :orders, :staff_id
  end
end
