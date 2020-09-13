class Invoice < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable
  # == Attributes ===========================================================
  enum status: {not_paid: 1, part_paid: 2, completed: 3, voided: 4}

  # == Relationships ========================================================
  belongs_to :client
  has_many :lines
  has_many :payments
  has_many :tips
  has_many :vouchers
  belongs_to :location

  # == Validations ==========================================================
  # == Scopes ===============================================================
  scope :search, -> (search) { search.present? ? where("sequence ?", "%" + search + "%") : all }
  scope :by_location_id, -> (location_id) { where(location_id: location_id) }

  # == Callbacks ============================================================
  # == Class Methods ========================================================
  def self.next_sequence(location_id)
    # TODO scope invoice with location id
    last_sequence = Invoice.last.try(:sequence).to_i
    location_start_sequence = Location.find(location_id).try(:next_num).to_i
    last_sequence > location_start_sequence ? last_sequence + 1 : location_start_sequence
  end

  # == Instance Methods =====================================================

  def client_name
    client.name
  end

  def location_name
    location.name
  end
end
