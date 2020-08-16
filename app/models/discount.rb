class Discount < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  includes Filterable

  enum deduct_type: { value: "value", percentage: "percentage" }
  enum apply_on: { services: "services", products: "products"}

  # == Relationships ========================================================

  # == Validations ==========================================================
  validates_presence_of :name, :starts_at, :ends_at

  # == Scopes ===============================================================
  scope :by_name, -> (name) { where("name ilike ?", "%" + name + "%")}
  scope :active, -> { where("starts_at::date <= ? AND ends_at::date >= ?",
                            Time.zone.today, Time.zone.today)}
  scope :scheduled, -> { where("starts_at::date > ?", Time.zone.today)}
  scope :expired, -> { where("ends::date < ?", Time.zone.today)}

  # == Callbacks ============================================================

  # == Class Methods ========================================================

  # == Instance Methods =====================================================
  def name
    "#{first_name} #{last_name}"
  end
end
