class AddUserIdToLocatoins < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :user_id, :integer
    add_index :locations, :user_id
  end
end
