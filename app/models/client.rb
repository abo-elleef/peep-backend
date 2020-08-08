class Client < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================

  enum notify_method: { email: 1 }
  enum gender: { female: 1, male: 2}

  # == Relationships ========================================================
  belongs_to :location, optional: true

  # == Validations ==========================================================
  validates_presence_of :first_name

  # == Scopes ===============================================================
  scope :search, -> (search) { search.present? ?  where("first_name ilike ?", "%" + search + "%").
      or(where("last_name ilike ?", "%" + search + "%")).
      or(where(phone: search)) : all }

  # == Callbacks ============================================================

  # == Class Methods ========================================================

  # == Instance Methods =====================================================
end
