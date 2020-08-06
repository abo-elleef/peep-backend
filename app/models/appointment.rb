class Appointment < ApplicationRecord
  has_many :appointments_services
  has_many :lines, dependent: :destroy
  has_many :services, through: :lines
  has_many :staffs, through: :lines
end
