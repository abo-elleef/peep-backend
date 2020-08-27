class Package < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable

  # == Attributes ===========================================================
  enum available_for: {everyone: 0, male: 1, female: 2}
  enum pricing_type: {service: 0, custom: 1, percentage: 2, free: 3}
  enum schedule_type: {sequence: 0, parallel: 1}

  # == Relationships ========================================================
  has_and_belongs_to_many :service_prices
  has_many :services, through: :service_prices

  # == Validations ==========================================================
  validates :name, :available_for, :schedule_type, :pricing_type, presence: true
  validates :deduction_amount, presence: true, if: [:custom?, :percentage?]
  validates :service_prices, presence: true

  # == Scopes ===============================================================
  scope :by_search, -> (search) { where("name ilike ?", "%" + search + "%").
      or(where("description ilike ?", "%" + search + "%")) }
  scope :by_name, -> (name) { where("name ilike ?", "%" + name + "%") }

  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================

end
