class Line < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  # == Relationships ========================================================
  belongs_to :appointment, inverse_of: :lines

  # == Validations ==========================================================
  validates_presence_of :appointment
  validates :staff_id, :service_id, :price, :original_price, :staff_name,
            :service_name, presence: true

  # == Scopes ===============================================================
  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================

  def self.overlaps?(starts_at, ends_at)
    where("starts_at <= ? AND ? <= ends_at", ends_at, starts_at).any?
  end

end
