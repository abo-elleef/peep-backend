class AppointmentService < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable
  # == Attributes ===========================================================
  # == Relationships ========================================================
  belongs_to :appointment
  belongs_to :service_price
  belongs_to :staff

  # == Validations ==========================================================
  # == Scopes ===============================================================
  scope :overlaps?, -> (starts_at, ends_at) { where("created_at <= ? AND ? <= created_at", ends_at, starts_at).any? }
  scope :during_current_month, -> { where("created_at > ? AND created_at < ?", Time.now.beginning_of_month, Time.now.end_of_month) }
  scope :by_starts_at, ->(starts_at) { where("appointment_services.created_at > ?", starts_at) }
  scope :by_ends_at, ->(ends_at) { where("appointment_services.created_at < ?", ends_at) }
  scope :by_staff_id, ->(staff_id) { where(staff_id: staff_id) }
  scope :by_location_id, ->(location_id) { joins(:appointment).where(appointments:{location_id: location_id}) }
  scope :by_search, ->(term) {
    joins(appointment: :client).
        where("clients.first_name ILIKE ? OR clients.last_name ILIKE ? ",  "%" + term + "%",  "%" + term + "%")
  }

  # == Callbacks ============================================================
  before_save :set_data
  # == Class Methods ========================================================
  # == Instance Methods =====================================================
  def service
    service_price&.service
  end

  def duration
    Time.at((ends_at - starts_at)).utc.strftime("%H:%M:%S")
  end



  private

  def set_data
    self.ends_at ||= self.starts_at + service_price.duration.minutes
  end
end
