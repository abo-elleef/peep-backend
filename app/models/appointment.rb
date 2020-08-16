class Appointment < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable

  # == Attributes ===========================================================
  enum status: {fresh: 1, confirmed: 2, arrived: 3, started: 4, completed: 5, cancelled: 6, no_show: 7}

  # == Relationships ========================================================
  has_many :appointments_services
  has_many :lines, inverse_of: :appointment, dependent: :destroy
  has_many :services, through: :lines
  has_many :staffs, through: :lines
  belongs_to :location
  belongs_to :cancellation_reason

  accepts_nested_attributes_for :lines

  # == Validations ==========================================================
  validates_presence_of :location_id

  # == Scopes ===============================================================
  scope :by_date, -> (starts_at, ends_at) { where("date >= ? AND date <= ?  ", starts_at, ends_at) }
  scope :by_location, -> (location_ids) { where(location_id: location_ids) }
  scope :by_staff, -> (staff_ids){ joins(:lines).where(lines: { staff_id: staff_ids })}
  scope :by_service, -> (service_ids){ joins(:lines).where(lines: {service_id: service_ids} )}

  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================
end
