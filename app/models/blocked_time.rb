class BlockedTime < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  # == Relationships ========================================================
  belongs_to :staff

  # == Validations ==========================================================
  validates_presence_of :staff_id, :start_at, :end_at

  # == Scopes ===============================================================
  scope :by_staff_id, -> (staff_id) { where(staff_id: staff_id) }
  scope :overlaps?, -> (starts_at, ends_at) { where("start_at <= ? AND ? <= end_at", ends_at, starts_at).any?}

  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================

end
