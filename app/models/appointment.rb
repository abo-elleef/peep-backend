class Appointment < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable

  # == Attributes ===========================================================
  enum status: {fresh: 1, confirmed: 2, arrived: 3, started: 4, completed: 5, cancelled: 6, no_show: 7}

  # == Relationships ========================================================
  has_many :appointments_services
  has_many :payments, inverse_of: :appointment, dependent: :destroy
  has_many :lines, inverse_of: :appointment, dependent: :destroy
  has_many :services, through: :lines
  has_many :staffs, through: :lines
  has_many :tips
  has_many :tipped_staff, through: :tips, source: :staff
  belongs_to :location
  belongs_to :client
  has_one :invoice

  accepts_nested_attributes_for :lines
  accepts_nested_attributes_for :payments
  accepts_nested_attributes_for :tips

  # == Validations ==========================================================
  validates_presence_of :location_id
  validates :cancellation_reason_id, presence: true, if: :cancelled?
  validates :lines, presence: true

  # == Scopes ===============================================================
  scope :by_ends_at, -> (ends_at) { where("appointments.created_at <= ?  ", ends_at) }
  scope :by_starts_at, -> (starts_at) { where("appointments.created_at >= ?", starts_at) }

  scope :by_location_ids, -> (location_ids) { where(location_id: location_ids) }
  scope :by_staff_ids, -> (staff_ids){ joins(:lines).where(lines: { staff_id: staff_ids })}
  scope :by_service, -> (service_ids){ joins(:lines).where(lines: {service_id: service_ids} )}

  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================
end
