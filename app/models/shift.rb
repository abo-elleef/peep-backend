class Shift < ApplicationRecord

  # == Constants ============================================================
  # == Extensions ===========================================================

  include Filterable

  # == Relationships ========================================================

  belongs_to :staff
  belongs_to :location

  # == Validations ==========================================================
  validate :single_day_shift, :valid_times
  # == Scopes ===============================================================

  scope :by_location_id, -> (location_id) {where(location_id: location_id)}
  scope :by_staff_id, -> (staff_id) {where(location_id: staff_id)}
  scope :by_datetime, -> (datetime) {
    datetime = Time.zone.parse(datetime) if datetime.is_a?(String)
    where("start_time::date >= ?::date and end_time::date <= ?::date",
          datetime.beginning_of_week.to_date, datetime.end_of_week.to_date)
  }

  # == Callbacks ============================================================
  # == Class Methods ========================================================
  def self.overlaps?(required_shift)
     where("staff_id = ? AND location_id = ? AND start_time <= ? AND ? <= end_time",
           required_shift[:staff_id], required_shift[:location_id], required_shift[:end_at],
           required_shift[:start_at]).any?
  end

  # == Instance Methods =====================================================


  private
  def single_day_shift
    return if start_time.to_date == end_time.to_date
    errors[:start_time] << "start time and end time should be in the same day"
  end

  def valid_times
    return if end_time > start_time
    errors[:end_time] << "end time must be bigger than stat time "
  end
end
