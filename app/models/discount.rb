class Discount < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable
  include UserScoped

  # == Attributes ===========================================================
  enum deduct_type: { value: "value", percentage: "percentage" }
  enum apply_on: { services: "services", products: "products",  All: 'All'}

  # == Relationships ========================================================
  has_many :discount_usages
  has_many :discounts_service_prices
  has_many :service_prices, through: :discounts_service_prices
  # == Validations ==========================================================
  validates_presence_of :name, :starts_at, :ends_at

  # == Scopes ===============================================================
  scope :by_name, -> (name) { where("name ilike ?", "%" + name + "%")}
  scope :by_search, -> (name) { where("name ilike ?", "%" + name + "%")}

  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================

  def status
    # TODO this should be based on start date and end date
    :active
  end

  def deduct_string
    return "KWD #{deduct_value}" if deduct_type.to_s == "value"
    return "% #{deduct_value}" if deduct_type.to_s == "percentage"
    ""
  end

  def select_text
    "#{name} (#{deduct_string} off)"
  end
end
