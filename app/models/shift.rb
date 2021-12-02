class Shift < ApplicationRecord

  # == Constants ============================================================
  # == Extensions ===========================================================

  include Filterable
  # == Attributes ===========================================================

  # == Relationships ========================================================

  belongs_to :staff
  belongs_to :location
  belongs_to :parent, class_name: 'Shift', foreign_key: :parent_id, optional: true
  has_many :children, class_name: 'Shift', foreign_key: :parent_id, inverse_of: :parent, dependent: :nullify

  # == Validations ==========================================================
  validate :single_day_shift, :valid_times
  # == Scopes ===============================================================

  scope :by_location_id, -> (location_id) { where(location_id: location_id) }
  scope :by_staff_id, -> (staff_id) { where(location_id: staff_id) }
  scope :by_starts_at, -> (starts_at) {
    starts_at = Time.zone.parse(starts_at) if starts_at.is_a?(String)
    where("starts_at::date >= ?::date ", starts_at.to_date)
  }
  scope :by_ends_at, -> (ends_at) {
    ends_at = Time.zone.parse(ends_at) if ends_at.is_a?(String)
    where("ends_at::date <= ?::date ", ends_at.to_date)
  }
  scope :overlaps?, ->(starts_at, ends_at) { where("starts_at <= ? AND ends_at >= ?", starts_at, ends_at).any? }

  # == Callbacks ============================================================
  after_commit :create_repeats, only: [:create, :update]
  # == Class Methods ========================================================
  # == Instance Methods =====================================================


  private
  def single_day_shift
    return if starts_at.to_date == ends_at.to_date
    errors[:starts_at] << "start time and end time should be in the same day"
  end

  def valid_times
    return if ends_at > starts_at
    errors[:ends_at] << "end time must be bigger than stat time "
  end

  def create_repeats
    return true if self.parent_id.present?
    if repeat == "daily"
      period = 1
    elsif repeat == "weekly"
      period = 7
    else
      return true
    end
    destroy_ids = self.child_ids
    end_date = (self.repeat_ends_at || Date.today.end_of_year).end_of_day
    start_date = self.starts_at
    count = 0
    while start_date < end_date do
      count +=1
      start_date += period.days
      Shift.create!({
                       location_id: self.location_id,
                       staff_id: self.staff_id,
                       starts_at: self.starts_at + (count * period).days,
                       ends_at: self.ends_at + (count * period).days,
                       repeat: self.repeat,
                       repeat_ends_at: self.repeat_ends_at,
                       parent_id: self.id,
                   })
    end
    Shift.where(id: destroy_ids).delete_all
  end
end
