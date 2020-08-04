class ServiceCategory < ApplicationRecord
  has_many :services

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