class DiscountsServicePrice < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  # == Attributes ===========================================================
  # == Relationships ========================================================
  belongs_to :service_price
  belongs_to :discount

  # == Validations ==========================================================
  # == Scopes ===============================================================
  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================
end