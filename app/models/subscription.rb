class Subscription < ApplicationRecord
  # == Constants ============================================================
  DAY_SECONDS = (60 * 60 * 24 )
  # == Extensions ===========================================================
  include Filterable



  # == Attributes ===========================================================
  enum available_for: {everyone: 0, males: 1, females: 2}
  enum pricing_type:  {value: "value", percentage: "percentage"}

  # == Relationships ========================================================

  # == Validations ==========================================================
  validates_presence_of :name

  # == Scopes ===============================================================
  scope :by_name, -> (name) { where("name ilike ?", "%" + name + "%") }

  # == Callbacks ============================================================
  # == Class Methods ========================================================

  # == Instance Methods =====================================================

  def duration
    ((ends_at - starts_at).to_f / DAY_SECONDS).ceil
  end
end
