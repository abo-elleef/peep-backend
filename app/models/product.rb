class Product < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================

  include Filterable

  # == Relationships ========================================================

  belongs_to :product_category
  belongs_to :product_brand
  belongs_to :supplier
  has_many :lines, as: :sellable
  has_many :locations_products
  has_many :locations, through: :locations_products

  # == Validations ==========================================================

  validates_presence_of :name
  validates_uniqueness_of :name, :barcode
  accepts_nested_attributes_for :locations_products

  # == Scopes ===============================================================

  scope :by_search, -> (search) { where("name ilike ?", "%" + search + "%").
      or(where("barcode ilike ?",  "%" + search + "%")).
      or(where("sku ilike ?",  "%" + search + "%")) }
  scope :by_product_category_id, -> (product_category_id) { where(product_category_id: product_category_id) }
  scope :by_product_brand_id, -> (product_brand_id) { where(product_brand_id: product_brand_id) }

  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================

end