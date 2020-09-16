class AppointmentService < ApplicationRecord
  belongs_to :appointment
  belongs_to :service
  belongs_to :service_price
end
