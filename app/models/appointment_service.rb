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

  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================
  def service
    service_price&.service
  end

  def duration
    Time.at((ends_at - starts_at)).utc.strftime("%H:%M:%S")
  end
end
