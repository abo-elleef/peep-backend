class Order < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable
  # == Attributes ===========================================================
  enum status: {requested: 1, received: 2, cancelled: 3 }
  # == Relationships ========================================================

  belongs_to :supplier
  belongs_to :location
  belongs_to :staff, optional:  true
  has_many :items
  accepts_nested_attributes_for :items, reject_if: :all_blank

  # == Validations ==========================================================

  validates_presence_of :status

  # == Scopes ===============================================================
  scope :by_supplier_id, -> (supplier_id) { where(supplier_id: supplier_id) }
  scope :by_status, -> (status) {where(status: status)}
  scope :by_search, -> (search) {joins(:location, :supplier).where("orders.id::text like ? or suppliers.name ilike ? or locations.name ilike ?", search, "%#{search}%", "%#{search}%")}

  # == Callbacks ============================================================
  before_validation :fill_status
  after_commit :calculate_total_cost, on: [:create, :update]
  # == Class Methods ========================================================
  # == Instance Methods =====================================================

  private

  def fill_status
    self.status = :requested if status.blank?
  end

  def calculate_total_cost
    # TODO: aboelleef should this be calculated based on requested or actual prices
    total_cost = items.map do |item|
      item.requested_price * item.requested_quantity
    end.sum
    update_column(:total_cost,  total_cost)
  end
end