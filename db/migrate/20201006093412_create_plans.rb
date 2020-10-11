class CreatePlans < ActiveRecord::Migration[6.0]
  def change
    create_table :plans do |t|
      t.integer :staffs_num
      t.integer :locations_num
      t.boolean :emails
      t.boolean :sms
      t.boolean :subscriptions
      t.boolean :analytics
      t.boolean :inventory
      t.boolean :languages
      t.boolean :permissions_config
      t.timestamps
    end
  end
end
