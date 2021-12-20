class AddAboutToLocations < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :about, :text
  end
end
