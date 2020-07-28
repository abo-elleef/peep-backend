class CreateServices < ActiveRecord::Migration[6.0]
  def change
    create_table :services do |t|
      t.string :name
      t.integer :treatment_type
      t.text :description
      t.integer :available_for
      t.boolean :online_booking
      t.boolean :staff_commission
      t.jsonb :extra_time
      t.timestamps
    end
    add_index :services, :extra_time, using: :gin
  end
end
