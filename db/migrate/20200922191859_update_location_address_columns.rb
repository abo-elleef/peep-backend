class UpdateLocationAddressColumns < ActiveRecord::Migration[6.0]
  def change
    rename_column :locations, :city, :area
    rename_column :locations, :state, :block
    rename_column :locations, :zipcode, :avenue
    add_column :suppliers, :street, :string
  end
end
