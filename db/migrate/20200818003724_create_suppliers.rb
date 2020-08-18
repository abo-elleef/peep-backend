class CreateSuppliers < ActiveRecord::Migration[6.0]
  def change
    create_table :suppliers do |t|
      t.string :name
      t.text :desc
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone
      t.string :website
      t.string :area
      t.string :block
      t.string :avenue
      t.string :building

      t.timestamps

      t.index :name
    end
  end
end
