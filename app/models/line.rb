class Line < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  # == Relationships ========================================================
  belongs_to :appointment, inverse_of: :lines
  belongs_to :client
  belongs_to :service_price
  has_many :deduction_usages
  has_many :deductions, through: :deduction_usages

  # == Validations ==========================================================
  validates_presence_of :appointment
  validates :staff_id, :service_id, :client_id, :service_price_id, :price_name,
            :price, :original_price, :staff_name, :service_name, presence: true

  # == Scopes ===============================================================
  scope :overlaps?, -> (starts_at, ends_at) { where("starts_at <= ? AND ? <= ends_at", ends_at, starts_at).any? }

  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================

end
