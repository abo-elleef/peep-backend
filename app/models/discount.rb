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
    return :invalid unless active?
    return :expired if Time.zone.now > ends_at
    return :starts_soon if Time.zone.now < starts_at &&  (Time.zone.now + 1.week) > starts_at
    return :ends_soon if Time.zone.now < ends_at &&  (Time.zone.now + 1.week) >  ends_at 
    return :future if (Time.zone.now + 1.week) < starts_at 
    return :active if Time.zone.now > starts_at &&  Time.zone.now  < ends_at
  end

  def deduct_string
    return "EGP #{deduct_value}" if deduct_type.to_s == "value"
    return "% #{deduct_value}" if deduct_type.to_s == "percentage"
    ""
  end

  def select_text
    "#{name} (#{deduct_string} off)"
  end
end
