class PaymentType < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable

  # == Relationships ========================================================
  has_many :payments

  # == Validations ==========================================================
  validates_presence_of :name
  
  # == Scopes ===============================================================
  scope :search, -> (search) { where("name ilike ?", "%" + search + "%") }

  # == Callbacks ============================================================
  # == Class Methods ========================================================
  def self.default_data
    [
        {
            name: "Cash"
        },
        {
            name: "Card"
        },
        {
            name: "Other"
        }
    ]
  end

  # == Instance Methods =====================================================
end
