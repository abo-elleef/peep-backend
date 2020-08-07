class Appointment < ApplicationRecord

  # == Constants ============================================================

  DETAILS_SCHEMA = "#{Rails.root}/app/models/schemas/appointments_details.json"

  # == Extensions ===========================================================

  include Filterable
  serialize :details, AppointmentDetailsSerializers
  store_accessor :details, :services

  # == Relationships ========================================================
  has_and_belongs_to_many :appointments_services
  has_many :appointments_staffs

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
