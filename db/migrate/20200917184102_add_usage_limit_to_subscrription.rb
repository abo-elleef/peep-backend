class AddUsageLimitToSubscrription < ActiveRecord::Migration[6.0]
  def change
    add_column :subscriptions, :limit, :integer, default: 1
  end
end
