class Shift < ApplicationRecord

  # == Constants ============================================================
  # == Extensions ===========================================================

  include Filterable

  # == Relationships ========================================================

  belongs_to :staff
  belongs_to :location

  # == Validations ==========================================================
  # == Scopes ===============================================================

  scope :filter_by_location_id, -> (location_id) {where(location_id: location_id)}
  scope :filter_by_staff_id, -> (staff_id) {where(location_id: staff_id)}
  scope :filter_by_datetime, -> (datetime) {
    where("start_time::date >= ?::date and end_time::date <= ?::date",
          datetime.beginning_of_week.to_date, datetime.end_of_week.to_date)
  }

  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================
end
