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

  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================
  def service
    service_price&.service
  end
end
