class ClosingShift < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable
  # == Relationships ========================================================
  has_and_belongs_to_many :locations

  # == Validations ==========================================================
  validates_presence_of :end_date, :start_date, :desc
  # == Scopes ===============================================================
  scope :by_location_id, -> (location_id) {
    where(id: ClosingShiftsLocation.where(location_id: location_id)
                .pluck(:closing_shift_id).uniq)
  }
  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================

end
