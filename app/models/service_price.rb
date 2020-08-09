class ServicePrice < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  # == Attributes ===========================================================
  enum type: {free: 1, from: 2, fixed: 3}

  # == Relationships ========================================================
  belongs_to :service, inverse_of: :service_prices

  # == Validations ==========================================================
  validates_presence_of :service
  validate :duration, :type, presence: true
  validates_presence_of :price, unless: :free?

  # == Scopes ===============================================================
  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================
end
