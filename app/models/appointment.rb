class Appointment < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable

  # == Relationships ========================================================
  has_many :appointments_services
  has_many :lines, dependent: :destroy
  has_many :services, through: :lines
  has_many :staffs, through: :lines


  # == Validations ==========================================================
  validates_presence_of :location_id

  # == Scopes ===============================================================
  scope :by_date, -> (start_time, end_time) { where("date => ? AND date <= ?  ", start_time, end_time) }
  scope :by_location, -> (location_ids) { where(location_id: location_ids) }
  scope :by_staff, -> (staff_ids){ joins(:lines).where(lines: { staff_id: staff_ids })}
  scope :by_service, -> (service_ids){ joins(:lines).where(lines: {service_id: service_ids} )}

  # == Callbacks ============================================================
  #
  # == Class Methods ========================================================
  #
  # == Instance Methods =====================================================

end
