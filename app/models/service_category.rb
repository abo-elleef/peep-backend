class ServiceCategory < ApplicationRecord
  include Filterable
  has_many :services

  scope :by_name, -> (name) { where("name ilike ?", name)}
  scope :search, ->(search) {where("name ilike ?", search).
      or(where("description ilike ?", search)). or(where("appointment_color ilike ?", search)). or all}

  def self.default_data
    [
        {
         name: "Hair ",
         description: "wonder fancy Hair care",
         appointment_color: "#00c9e1"
     }
    ]
  end
end
