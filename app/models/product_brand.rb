class ProductBrand < ApplicationRecord
  include Filterable
  validates_presence_of :name
  validates_uniqueness_of :name

  scope :by_name, -> (name) { where("name ilike ?", "%" + name + "%")}
end
