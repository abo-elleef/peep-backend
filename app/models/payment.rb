class Payment < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  # == Attributes ===========================================================
  # == Relationships ========================================================
  belongs_to :payment_type
  belongs_to :invoice

  # == Validations ==========================================================
  #validates_presence_of :appointment

  # == Scopes ===============================================================
  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================
  def name
    payment_type.try :name
  end
end
