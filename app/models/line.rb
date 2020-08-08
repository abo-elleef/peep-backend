class Line < ApplicationRecord
  belongs_to :appointment
  belongs_to :staff
  belongs_to :service
  validates :appointment_id,:staff_id, :service_id, :price, :original_price, :staff_name,
           :service_name, :starts_at, :ends_at,  presence: true

end
