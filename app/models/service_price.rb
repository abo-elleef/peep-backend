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

  def category_id
    service.service_category_id
  end

  def duration_stringified
    # TODO this should be string as 1 h and 3 minutes
    duration
  end

  def full_name
    "#{service_name} #{name}"
  end

  def full_details_html
    "<div>
  <div>
    <p>#{service.name}</p>
    <span>#{name} </span>
  </div>
  <div>(#{price} KWD)</div>
</div>".html_safe
  end

  def checkout_help_text(staff)
    "#{self.name} #{self.duration.to_s} with #{staff.name} "
  end
end
