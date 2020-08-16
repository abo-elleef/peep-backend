class Payment < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  # == Attributes ===========================================================
  enum pay_type: {cash: 1, card: 2, voucher: 3}

  # == Relationships ========================================================
  belongs_to :appointment, inverse_of: :payments

  # == Validations ==========================================================
  validates_presence_of :appointment
  validates :pay_type, presence: true
  # == Scopes ===============================================================
  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================
end
