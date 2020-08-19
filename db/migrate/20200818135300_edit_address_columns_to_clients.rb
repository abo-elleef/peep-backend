class EditAddressColumnsToClients < ActiveRecord::Migration[6.0]
  def change
    add_column :clients, :area, :string
    add_column :clients, :block, :string
    add_column :clients, :avenue, :string
    add_column :clients, :building, :string
    remove_columns :clients, :suburb, :city, :state, :postal_code
  end
end
