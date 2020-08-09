class ClosingShift < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable
  # == Relationships ========================================================
  belongs_to :location, inverse_of: :closing_shifts

  # == Validations ==========================================================
  # == Scopes ===============================================================
  scope :by_location_id, -> (location_id) {where(location_id: location_id)}
  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================

end
