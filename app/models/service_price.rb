class ServicePrice < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  # == Attributes ===========================================================
  enum pricing_type: {free: 1, start: 2, fixed: 3}

  # == Relationships ========================================================
  belongs_to :service, inverse_of: :service_prices

  # == Validations ==========================================================
  validates_presence_of :service
  validates :duration, :pricing_type, presence: true

  # == Scopes ===============================================================
  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================
end
