class Invoice < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  # == Attributes ===========================================================
  enum status: {not_paid: 1, parted: 2, completed: 3}

  # == Relationships ========================================================
  belongs_to :appointment
  belongs_to :invoiceable, polymorphic: true
  has_many :payments
  has_many :invoice_items
  has_many :tips
  has_many :vouchers

  # == Validations ==========================================================
  # == Scopes ===============================================================
  # == Callbacks ============================================================
  # == Class Methods ========================================================
  def self.next_sequence(location_id)
    # TODO scope invoice with location id
    last_sequence = Invoice.last.try(:sequence).to_i
    location_start_sequence = Location.find(location_id).try(:next_num).to_i
    last_sequence > location_start_sequence ? last_sequence + 1 : location_start_sequence
  end

  # == Instance Methods =====================================================
end
