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

  scope :by_location_id, -> (location_id) { where(location_id: location_id) }
  scope :by_staff_id, -> (staff_id) { where(location_id: staff_id) }
  scope :by_datetime, -> (datetime) {
    datetime = Time.zone.parse(datetime) if datetime.is_a?(String)
    where("starts_at::date >= ?::date and ends_at::date <= ?::date",
          datetime.beginning_of_week.to_date, datetime.end_of_week.to_date)
  }
  scope :overlaps?, ->(starts_at, ends_at) { where("starts_at <= ? AND ends_at >= ?", starts_at, ends_at).any? }

  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================


  private
  def single_day_shift
    return if starts_at.to_date == ends_at.to_date
    errors[:starts_at] << "start time and end time should be in the same day"
  end

  def valid_times
    return if ends_at > starts_at
    errors[:ends_at] << "end time must be bigger than stat time "
  end
end
