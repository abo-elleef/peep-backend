class ChangeShiftTimesToDatetimes < ActiveRecord::Migration[6.0]
  def change
    remove_column :shifts, :start_time, :time
    remove_column :shifts, :end_time, :time
    remove_column :shifts, :day, :integer
    add_column :shifts, :start_time, :datetime
    add_column :shifts, :end_time, :datetime
  end
end
