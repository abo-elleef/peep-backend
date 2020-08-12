class BlockedTime < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  # == Relationships ========================================================
  belongs_to :staff

  # == Validations ==========================================================
  validates_presence_of :staff_id, :start_at, :end_at

  # == Scopes ===============================================================
  scope :by_staff_id, -> (staff_id) { where(staff_id: staff_id) }
  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================

  def self.overlaps?(starts_at, ends_at)
    where("start_at <= ? AND ? <= end_at", ends_at, starts_at).any?
  end

end
