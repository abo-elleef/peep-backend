class ServicePrice < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include UserScoped
  # == Attributes ===========================================================
  enum pricing_type: {free: 1, start: 2, fixed: 3}

  # == Relationships ========================================================
  belongs_to :service, inverse_of: :service_prices
  has_many :lines, as: :sellable
  has_many :packages
  has_many :discounts_service_prices
  has_many :discounts, through: :discounts_service_prices
  has_and_belongs_to_many :subscriptions

  # == Validations ==========================================================
  validates_presence_of :service
  validates :duration, :pricing_type, presence: true

  # == Scopes ===============================================================
  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================

  def service_name
    service.name
  end

  def checkout_text
    service_name
  end

  def checkout_help_text(staff)
    "#{self.name} #{self.duration.to_s} with #{staff.name} "
  end
end
