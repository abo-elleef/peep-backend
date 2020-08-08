class Line < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  # == Relationships ========================================================
  belongs_to :appointment, inverse_of: :lines

  # == Validations ==========================================================
  validates :appointment, :staff_id, :service_id, :price, :original_price, :staff_name,
            :service_name, presence: true

  # == Scopes ===============================================================
  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================

end
