class Supplier < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable

  # == Attributes ===========================================================
  # if any enums
  # == Relationships ========================================================
  has_many :products

  # == Validations ==========================================================
  validates_presence_of :name

  # == Scopes ===============================================================
  scope :by_name, -> (name) { where("name ilike ?", "%" + name + "%") }
  scope :by_search, -> (search) { where("name ilike ?", "%" + search + "%") }

  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================

  def address_string
    [self.street, self.area, self.block, self.avenue, self.building].reject(&:blank?).join(", ")      
  end
end
