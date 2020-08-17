class Product < ApplicationRecord
  include Filterable
  belongs_to :product_category
  belongs_to :product_brand

  validates_presence_of :name
  validates_uniqueness_of :name, :barcode

  scope :by_search, -> (search) { where("name ilike ?", "%" + search + "%").
      or(where("barcode ilike ?", search)).
      or(where("sku ilike ?", search)) }
  scope :by_product_category_id, -> (product_category_id) { where(product_category_id: product_category_id) }
  scope :by_product_brand_id, -> (product_brand_id) { where(product_brand_id: product_brand_id) }
end