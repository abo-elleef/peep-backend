class AddStartsAtAndEndsAtToline < ActiveRecord::Migration[6.0]
  def change
    add_column :lines, :starts_at, :datetime
    add_column :lines, :ends_at, :datetime
  end
end
