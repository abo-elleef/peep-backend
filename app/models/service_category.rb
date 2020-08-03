class ServiceCategory < ApplicationRecord
  include Filterable
  has_many :services
end