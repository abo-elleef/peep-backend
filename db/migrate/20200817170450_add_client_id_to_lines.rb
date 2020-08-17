class AddClientIdToLines < ActiveRecord::Migration[6.0]
  def change
    add_column :lines, :client_id, :integer
    add_index :lines, :client_id
  end
end
