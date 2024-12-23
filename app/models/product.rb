class Product < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================

  include Filterable

  # == Relationships ========================================================

  belongs_to :product_category
  belongs_to :product_brand
  has_many :lines, as: :sellable
  belongs_to :supplier, optional:  true
  has_many :locations_products
  has_many :locations, through: :locations_products
  has_one   :voucher_usage,  as: :usable

  # == Validations ==========================================================

  validates_presence_of :name
  validates_uniqueness_of :name, :barcode
  accepts_nested_attributes_for :locations_products

  # == Scopes ===============================================================

  scope :by_search, -> (search) { where("name ilike ?", "%" + search + "%").
      or(where("barcode ilike ?",  "%" + search + "%")).
      or(where("sku ilike ?",  "%" + search + "%")) }
  scope :by_product_category_ids, -> (product_category_id) { where(product_category_id: product_category_id) }
  scope :by_product_brand_ids, -> (product_brand_id) { where(product_brand_id: product_brand_id) }
  scope :by_supplier_ids, -> (supplier_id) { where(supplier_id: supplier_id) }
  scope :by_location_ids, -> (location_id) { joins(:locations).where(locations:{id: location_id}).
      distinct }

  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================
  def price
    self.retail_price
  end

  def duration
    0
  end

end