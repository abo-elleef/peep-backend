class CancellationReason < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable

  # == Relationships ========================================================
  has_many :appointments, foreign_key: :cancellation_id

  # == Validations ==========================================================
  # == Scopes ===============================================================
  # == Callbacks ============================================================
  # == Class Methods ========================================================
  def self.default_data
    [
        {
            name: "Duplicate appointment"
        },
        {
            name: "Appointment made by mistake"
        },
        {
            name: "Client not available"
        }
    ]
  end

  # == Instance Methods =====================================================

end
