class ServiceCategory < ApplicationRecord
  include Filterable
  has_many :services

  scope :filter_by_name, -> (name) { where name: name }
end