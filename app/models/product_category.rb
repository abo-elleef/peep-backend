class ProductCategory < ApplicationRecord
  validates_presence_of :name
  scope :search, -> (search) { search.present? ?  where("name ilike ?", "%" + search + "%") : all }
end