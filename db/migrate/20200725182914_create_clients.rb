class CreateClients < ActiveRecord::Migration[6.0]
  def change
    create_table :clients do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone
      t.string :email
      t.integer :notify_method
      t.string :language
      t.integer :gender
      t.datetime :birthday
      t.string :notes
      t.boolean :global_notes
      t.integer :location_id

      t.timestamps
      t.index :location_id
    end
  end
end
