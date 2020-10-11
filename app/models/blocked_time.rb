class BlockedTime < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable
  # == Relationships ========================================================
  belongs_to :staff

  # == Validations ==========================================================
  validates_presence_of :staff_id, :starts_at, :ends_at

  # == Scopes ===============================================================
  scope :by_staff_id, -> (staff_id) { where(staff_id: staff_id) }
  scope :overlaps?, -> (starts_at, ends_at) { where("starts_at <= ? AND ? <= ends_at", ends_at, starts_at).any?}

  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================

end
