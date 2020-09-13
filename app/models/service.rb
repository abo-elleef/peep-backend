class Service < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable

  # == Attributes ===========================================================
  enum available_for: {everyone: 0, males: 1, females: 2}
  enum extra_time_type: {processing_after: 0, blocking_after: 1}

  # == Relationships ========================================================
  has_and_belongs_to_many :staffs
  belongs_to :service_category
  has_many :service_prices, inverse_of: :service, dependent: :destroy
  accepts_nested_attributes_for :service_prices
  has_many :packages, through: :service_prices
  has_and_belongs_to_many :voucher_types
  has_many :appointments_services
  has_many :appointments, through: :appointments_services
  has_many :lines, as: :sellable

  # == Validations ==========================================================
  validates_presence_of :name

  # == Scopes ===============================================================
  scope :by_name, -> (name) { where("name ilike ?", "%" + name + "%") }
  scope :by_location_id, -> (location_id) {
    where(id: LocationsService.where(location_id: location_id)
                .pluck(:service_id).uniq)
  }
  scope :by_search, -> (search) { where("name ilike ?", "%" + search + "%").
      or(where("description ilike ?", "%" + search + "%")) }

  # == Callbacks ============================================================
  # == Class Methods ========================================================
  def self.default_data
    [
        {
            name: "Hair Cut",
            treatment_type_id: 1, # TreatmentType.first.id
            description: "wonder fancy Hair Cut",
            available_for: 0,
            staff_commission: true,
            extra_time: false
        },
        {
            name: "Hair Coloring",
            treatment_type_id: 1, # TreatmentType.first.id
            description: "wonder fancy Hair Coloring",
            available_for: 0,
            staff_commission: true,
            extra_time: false
        }
    ]
  end

  # == Instance Methods =====================================================
end
