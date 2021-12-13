class Staff < ApplicationRecord

  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable
  # == Relationships ========================================================
  has_and_belongs_to_many :services
  has_and_belongs_to_many :locations
  has_many :shifts
  has_many :lines
  #has_many :appointments, through: :lines
  has_many :blocked_times
  # == Validations ==========================================================
  # == Scopes ===============================================================
  scope :by_search, -> (search) { search.present? ?  where("first_name ilike ?", "%" + search + "%").
      or(where("last_name ilike ?", "%" + search + "%")).
      or(where(phone: search)) : all }

  scope :by_location_id, -> (location_id) { location_id.present? ?  joins(:locations).where(locations: {id: location_id}).distinct : all }
  # == Callbacks ============================================================
  # == Class Methods ========================================================

  def self.default_data
    [
        {
            first_name: "Ahmed",
            last_name: "Aboelleef",
            booking_enabled: true,
            booking_color: "#ff00ff",
            title: "alpha",
            notes: "committed employee",
            contract_start: Time.zone.now,
            contract_end: Time.zone.now + 1.year,
        },
        {
            first_name: "Mo",
            last_name: "Monier",
            booking_enabled: true,
            booking_color: "#0000ff",
            title: "beta",
            notes: "almost committed employee",
            contract_start: Time.zone.now,
            contract_end: Time.zone.now + 1.year,
        }
    ]
  end

  # == Instance Methods =====================================================
  def name
    "#{first_name} #{last_name}"
  end

  def has_service?(service)
    self.services.include?(service)
  end

  def status_between(starts_at, ends_at)
    statuses = []
    if self.shifts.overlaps?(starts_at, ends_at)
      if self.appointment_services.overlaps?(starts_at, ends_at)
        statuses << :staff_busy
      end
      if self.blocked_times.overlaps?(starts_at, ends_at)
        statuses << :staff_off
      end
    else
      statuses << :no_shift
    end
    statuses
  end
end
