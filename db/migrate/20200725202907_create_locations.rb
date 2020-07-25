class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :name
      t.integer :business_type
      t.string :phone
      t.string :email
      t.string :street
      t.string :building
      t.string :city
      t.string :state
      t.string :zipcode

      t.timestamps
    end
  end
end
