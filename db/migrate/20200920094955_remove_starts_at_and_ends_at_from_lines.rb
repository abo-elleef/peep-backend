class RemoveStartsAtAndEndsAtFromLines < ActiveRecord::Migration[6.0]
  def change
    remove_column :lines, :starts_at, :datetime
    remove_column :lines, :ends_at, :datetime
  end
end
