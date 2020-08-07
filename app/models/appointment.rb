class Appointment < ApplicationRecord

  # == Constants ============================================================

  DETAILS_SCHEMA = "#{Rails.root}/app/models/schemas/appointments_details.json"

  # == Extensions ===========================================================

  include Filterable
  serialize :details, AppointmentDetailsSerializer
  store_accessor :details, :services

  # == Relationships ========================================================
  has_and_belongs_to_many :services
  has_and_belongs_to_many :staffs
  belongs_to :location
  belongs_to :client

  validates :details, presence: true, json: {schema: DETAILS_SCHEMA}


  # SCHEMA = {
  #     'service' => ['service_id', 'service_name', 'staff_id', 'staff_name', 'price', 'original_price', 'starts_at', 'ends_at'],
  # }
  #
  # SCHEMA.each do |key, val|
  #   val.each do |method|
  #     define_method "#{key}_#{method}" do
  #       self.send("#{key}")[method]
  #     end
  #
  #     define_method "#{key}_#{method}=" do |arg|
  #       self.send("#{key}")[method] = arg
  #     end
  #   end
  # end

  # appointment_details = {
  #     services: [
  #         {
  #             service_id: "",
  #             service_name: "",
  #             staff_id: 1,
  #             staff_name: "",
  #             price: "",
  #             original_price: "",
  #             starts_at: "",
  #             ends_at: ""
  #         }
  #     ]
  # }

end

# (100000).times do |index|
#   client = Client.all.sample
#   service = Service.all.sample
#   staff = Staff.all.sample
#   location = Location.all.sample
#   price = (1..100).to_a.sample
#   Appointment.create!({
#                           notes: " notes for appointment #{index + 23377}",
#                           status: 1,
#                           client_id: client.id,
#                           location_id: location.id,
#                           start_time: Time.zone.now,
#                           end_time: Time.zone.now + 3.hours,
#                           details:
#                               {
#                                   services: [
#                                       {
#                                           service_id: service.id,
#                                           service_name: service.name,
#                                           staff_id: staff.id,
#                                           staff_name: staff.first_name,
#                                           price: price,
#                                           original_price: price * 1.2,
#                                           starts_at: Time.zone.now,
#                                           ends_at: Time.zone.now + 1.hour
#                                       }
#                                   ]
#                               }
#
#
#                       })
# end
