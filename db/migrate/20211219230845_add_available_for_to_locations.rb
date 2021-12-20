class AddAvailableForToLocations < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :available_for, :integer, default: 0
  end
end
