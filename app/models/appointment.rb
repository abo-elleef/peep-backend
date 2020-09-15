class Appointment < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable

  # == Attributes ===========================================================
  enum status: {fresh: 1, confirmed: 2, arrived: 3, started: 4, completed: 5, cancelled: 6, no_show: 7}

  # == Relationships ========================================================
  has_many :appointments_services
  has_many :services, through: :appointments_services
  belongs_to :location
  belongs_to :client
   accepts_nested_attributes_for :appointments_services

  # == Validations ==========================================================
  validates_presence_of :location_id
  validates :cancellation_reason_id, presence: true, if: :cancelled?

  # == Scopes ===============================================================
  scope :by_ends_at, -> (ends_at) { where("appointments.created_at::date <= ?  ", ends_at.to_date) }
  scope :by_starts_at, -> (starts_at) { where("appointments.created_at::date >= ?", starts_at.to_date) }

  scope :by_location_ids, -> (location_ids) { where(location_id: location_ids) }
  # @monier invoices
  scope :by_staff_ids, -> (staff_ids){ }#joins(:appointments_services).where(lines: { staff_id: staff_ids })}
  scope :by_service, -> (service_ids){ } #joins(:appointments_services).where(lines: {service_id: service_ids} )}

  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================
end
