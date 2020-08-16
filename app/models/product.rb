class Product < ApplicationRecord
  include Filterable
  belongs_to :product_category
  belongs_to :product_brand

  validates_presence_of :name
  validates_uniqueness_of :name, :barcode

  scope :by_search, -> (search) { where("name ilike ?", "%" + search + "%").
      or(where("barcode ilike ?", search)).
      or(where("sku ilike ?", search))}
end