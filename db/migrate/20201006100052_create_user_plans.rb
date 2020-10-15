class CreateUserPlans < ActiveRecord::Migration[6.0]
  def change
    create_table :user_plans do |t|
      t.integer :user_id
      t.integer :plan_id
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
