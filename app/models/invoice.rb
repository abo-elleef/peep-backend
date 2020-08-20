class Invoice < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  # == Relationships ========================================================
  belongs_to :appointment

  # == Validations ==========================================================
  # == Scopes ===============================================================
  # == Callbacks ============================================================
  # == Class Methods ========================================================
  def self.next_sequence(location_id)
    (Invoice.last.try(:sequence).to_i  + 1) || InvoiceSequence.find_by(location_id: location_id).next_num
  end
  # == Instance Methods =====================================================
end
