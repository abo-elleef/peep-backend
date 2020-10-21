class Role < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  # == Relationships ========================================================
  has_and_belongs_to_many :users

  # == Validations ==========================================================
  # == Scopes ===============================================================
  # == Callbacks ============================================================
  # == Class Methods ========================================================
  def self.default_data
    [
        {
            name: "admin"
        },
        {
            name: "owner"
        },
        {
            name: "location-manager"
        },
        {
            name: "store-manager"
        },
        {
            name: "staff-member"
        },
        {
            name: "client"
        }
    ]
  end

  # == Instance Methods =====================================================
end
