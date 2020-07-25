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
      t.belongs_to :location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
