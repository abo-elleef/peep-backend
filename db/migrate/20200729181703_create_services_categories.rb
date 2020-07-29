class CreateServicesCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :services_categories do |t|
      t.string :name
      t.integer :appointment_color
      t.text :description
      t.timestamps
    end
  end
end
