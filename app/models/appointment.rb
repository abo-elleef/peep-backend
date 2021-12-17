class Appointment < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable
  include UserScoped

  # == Attributes ===========================================================
  enum status: {booked: 1, confirmed: 2, arrived: 3, started: 4, completed: 5, cancelled: 6, no_show: 7}

  # == Relationships ========================================================
  has_many :appointment_services, dependent: :destroy
  has_many :service_prices, through: :appointment_services
  has_many :services, through: :service_prices
  belongs_to :location
  belongs_to :client, optional: true
  belongs_to :invoice, optional: true
  accepts_nested_attributes_for :appointment_services, :allow_destroy => true

  # == Validations ==========================================================
  validates_presence_of :location_id
  validates :cancellation_reason_id, presence: true, if: :cancelled?

  # == Scopes ===============================================================
  scope :by_ends_at, -> (ends_at) { where("appointments.created_at::date <= ?  ", ends_at.to_date) }
  scope :by_starts_at, -> (starts_at) { where("appointments.created_at::date >= ?", starts_at.to_date) }

  scope :by_location_id, -> (location_ids) { where(location_id: location_ids) }
  scope :by_staff_id, -> (staff_ids) { joins(:appointment_services).where(appointment_services: {staff_id: staff_ids}) }
  scope :by_service, -> (service_ids) { joins(:appointment_services).where(service_id: service_ids) }
  scope :completed, -> { where("status = ?", 5) }
  scope :cancelled, -> { where("status = ?", 6) }


  # == Callbacks ============================================================

  after_create :set_serving_date
  # == Class Methods ========================================================
  # == Instance Methods =====================================================


  def starts_at
    appointment_services.sort_by(&:starts_at).first.try(:starts_at)
  end

  def ends_at
    appointment_services.sort_by(&:ends_at).last.try(:ends_at)
  end

  def total_price
    service_prices.map(&:price).compact.sum
  end

  def total_duration
    service_prices.map(&:duration).compact.sum
  end

  def color
    object.service_prices.first&.service&.service_category&.appointment_color || 'red'
  end

  def client_name
    client&.name || 'Walk-IN'
  end

  private

  def set_serving_date
    update_column(:date, appointment_services.first.try(:starts_at))
  end
end
