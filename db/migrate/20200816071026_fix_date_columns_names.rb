class FixDateColumnsNames < ActiveRecord::Migration[6.0]
  def change
    rename_column :shifts, :start_time, :starts_at
    rename_column :shifts, :end_time, :ends_at
    rename_column :closing_shifts, :start_date, :starts_at
    rename_column :closing_shifts, :end_date, :ends_at
    rename_column :blocked_times, :start_at, :starts_at
    rename_column :blocked_times, :end_at, :ends_at
  end
end
