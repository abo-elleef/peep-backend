class Location < ApplicationRecord

  # == Constants ============================================================
  # == Extensions ===========================================================
  enum :business_type => {
      "hair_alon": 1,
      "beauty_salon": 4,
      "barbershop": 5,
      "nail_Salon": 2,
      "massage": 7,
      "spa": 8,
      "eyebrows_&_lashes": 6,
      "waxing salon": 3,
      "tanning_studio": 13,
      "tattoo_&_piercing": 12,
      "therapy_center": 11,
      "personal_trainer": 10,
      "gym_&_fitness": 9,
      "other": 14
  }

  # == Relationships ========================================================
  has_and_belongs_to_many :staffs
  has_and_belongs_to_many :services
  has_and_belongs_to_many :closing_shifts
  has_many :locations_products
  has_many :products, through: :locations_products
  has_many :appointments
  has_many :clients
  has_many :invoices
  has_one :invoice_sequence
  belongs_to :user, optional: true

  # == Validations ==========================================================
  # TODO enable this validation back after adding authentication
  # validates_presence_of :user_id

  # == Scopes ===============================================================
  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================

  def closing?(starts_at, ends_at)
    closing_shifts.where("starts_at <= ? AND ? <= ends_at", ends_at, starts_at).any?
  end

end
