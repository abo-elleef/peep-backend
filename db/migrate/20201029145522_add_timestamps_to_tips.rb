class AddTimestampsToTips < ActiveRecord::Migration[6.0]
  def change
    change_table :tips do |t|
      t.timestamps
    end
  end
end
