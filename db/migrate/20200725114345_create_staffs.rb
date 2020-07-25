class CreateStaffs < ActiveRecord::Migration[6.0]
  def change
    create_table :staffs do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone
      t.string :email
      t.boolean :booking_enabled
      t.string :booking_color
      t.string :title
      t.text :notes
      t.datetime :contract_start
      t.datetime :contract_end

      t.timestamps
    end
  end
end
