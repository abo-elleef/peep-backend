class AddDescToClosingShifts < ActiveRecord::Migration[6.0]
  def change
    add_column :closing_shifts, :desc, :text
  end
end
