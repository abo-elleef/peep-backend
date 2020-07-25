class AddAddressColumnsToClients < ActiveRecord::Migration[6.0]
  def change
    add_column :clients, :street, :string
    add_column :clients, :suburb, :string
    add_column :clients, :city, :string
    add_column :clients, :state, :string
    add_column :clients, :postal_code, :string
  end
end