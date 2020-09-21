class Line < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable

  # == Attributes ===========================================================
  # == Relationships ========================================================
  belongs_to :staff
  belongs_to :sellable, polymorphic: true
  belongs_to :invoice
  has_one :discount_usage
  accepts_nested_attributes_for :discount_usage

  # == Validations ==========================================================
  # validates_presence_of :appointment
  validates :staff_id, :sellable_type, :sellable_id, :unit_price, :original_unit_price, presence: true

  # == Scopes ===============================================================
  scope :by_ends_at, -> (ends_at) { where("lines.created_at <= ?  ", ends_at) }
  scope :by_starts_at, -> (starts_at) { where("lines.created_at >= ?", starts_at) }
  scope :by_staff_ids, -> (staff_ids){ where(staff_id: staff_ids )}

  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================

  def staff_name
    staff.name
  end

  def location_name
    invoice.location.name
  end

  def action_type
    'invoice'
  end

  def action_id
    invoice.id
  end

  def quantity_change
    quantity.to_i * -1
  end

  def cost_price
    unit_price
  end
end
