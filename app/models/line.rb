class Line < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable
  # == Relationships ========================================================

  belongs_to :appointment, inverse_of: :lines
  belongs_to :client
  # belongs_to :service_price
  belongs_to :staff
  belongs_to :sellable, polymorphic: true

  # == Validations ==========================================================
  validates_presence_of :appointment
  validates :staff_id, :service_id, :client_id, :sellable_type, :sellable_id,
            :sellable_name, :price, :original_price, :staff_name, :service_name,
            presence: true

  # == Scopes ===============================================================
  scope :overlaps?, -> (starts_at, ends_at) { where("starts_at <= ? AND ? <= ends_at", ends_at, starts_at).any? }

  scope :by_ends_at, -> (ends_at) { where("lines.created_at <= ?  ", ends_at) }
  scope :by_starts_at, -> (starts_at) { where("lines.created_at >= ?", starts_at) }

  scope :by_location_ids, -> (location_ids) {
    joins(:appointment).where(appointments:{location_id: location_ids})
  }
  scope :by_staff_ids, -> (staff_ids){ where(staff_id: staff_ids )}

  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================

  def staff_name
    staff.name
  end
  def location_name
    location.name
  end
  def action_type
    'invoice'
  end
  def action_id
    appointment.invoice.id
  end

  def quantity_change
    quantity.to_i * -1
  end
  def cost_price
    price
  end
end
