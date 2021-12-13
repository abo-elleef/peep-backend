class ProductCategory < ApplicationRecord
  include Filterable
  has_many :products
  validates_presence_of :name
  validates_uniqueness_of :name

  scope :by_name, -> (name) { where("name ilike ?", "%" + name + "%")}
  scope :by_search, -> (name) { where("name ilike ?", "%" + name + "%")}
end