class CreateServiceCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :service_categories do |t|
      t.string :name
      t.string :appointment_color
      t.text :description
      t.timestamps
    end
  end
end
