class ClosingShift < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable
  # == Relationships ========================================================
  has_and_belongs_to_many :locations

  # == Validations ==========================================================
  validates_presence_of :ends_at, :starts_at, :desc
  # == Scopes ===============================================================
  scope :by_location_id, -> (location_id) {
    where(id: ClosingShiftsLocation.where(location_id: location_id)
                .pluck(:closing_shift_id).uniq)
  }
  # == Callbacks ============================================================
  before_save :refine_attributes
  # == Class Methods ========================================================
  # == Instance Methods =====================================================

  def location_names
    locations.pluck(:name)
  end

  def number_of_days
    ((ends_at - starts_at).to_f / ( 60 * 60 * 24 )).ceil
  end

  private

  def refine_attributes
    self.starts_at = self.starts_at.beginning_of_day
    self.ends_at = self.ends_at.end_of_day
  end
end
