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
  accepts_nested_attributes_for :discount_usage, reject_if: :all_blank

  # == Validations ==========================================================
  # validates_presence_of :appointment
  validates :staff_id, :sellable_type, :sellable_id, :unit_price, :original_unit_price, presence: true

  # == Scopes ===============================================================
  scope :by_ends_at, -> (ends_at) { where("lines.created_at <= ?  ", ends_at) }
  scope :by_starts_at, -> (starts_at) { where("lines.created_at >= ?", starts_at) }
  scope :by_staff_ids, -> (staff_ids){ where(staff_id: staff_ids ) if staff_ids.present?}
  scope :by_location_ids, -> (location_id) { joins(:invoice).where(invoices: { location_id: location_id }) }
  scope :during_current_month, -> { where("created_at > ? AND created_at < ?", Time.now.beginning_of_month, Time.now.end_of_month) }


  # == Callbacks ============================================================
  before_save :set_data
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

  private

    def set_data
      self.staff_name = self.staff.name
      self.sellable_name = self.sellable.name
      self.ends_at ||= self.starts_at + sellable.duration.minutes
    end
end
