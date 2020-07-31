class Appointment < ApplicationRecord
  has_many :appointments_services
  has_many :services, through: :appointments_services
end
