class ServiceCategory < ApplicationRecord
  include Filterable
  has_many :services

  scope :filter_by_name, -> (name) { where name: name }

  def self.default_data
        {
            name: "Hair ",
            description: "wonder fancy Hair care",
            appointment_color: "#00c9e1"
        }
  end
end