class AddRepeatOptionToShift < ActiveRecord::Migration[6.0]
  def change
    add_column :shifts, :repeat, :string
    add_column :shifts, :parent_id, :integer
    add_column :shifts, :repeat_ends_at, :date

  end
end
