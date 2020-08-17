class AddDefaultToStatus < ActiveRecord::Migration[6.0]
  def change
    change_column_default :appointments, :status, from: nil, to: 1
  end
end
