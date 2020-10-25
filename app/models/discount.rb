class Discount < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable
  include UserScoped

  # == Attributes ===========================================================
  enum deduct_type: { value: "value", percentage: "percentage" }
  enum apply_on: { services: "services", products: "products", voucher_types: "voucher_types", All: 'All'}

  # == Relationships ========================================================
  has_many :discount_usages
  has_many :discounts_service_prices
  has_many :service_prices, through: :discounts_service_prices
  # == Validations ==========================================================
  validates_presence_of :name

  # == Scopes ===============================================================
  scope :by_name, -> (name) { where("name ilike ?", "%" + name + "%")}

  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================

  def status
    # TODO this should be based on start date and end date
    :active
  end
end
