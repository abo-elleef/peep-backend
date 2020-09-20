class AppointmentService < ApplicationRecord
  include Filterable
  belongs_to :appointment
  belongs_to :service_price
  belongs_to :staff


  def service
    service_price&.service
  end
end
