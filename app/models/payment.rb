class Payment < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  # == Attributes ===========================================================
  # == Relationships ========================================================
  #belongs_to :appointment, inverse_of: :payments
  belongs_to :payment_type

  # == Validations ==========================================================
  #validates_presence_of :appointment

  # == Scopes ===============================================================
  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================
end
