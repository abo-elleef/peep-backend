class Staff < ApplicationRecord
  has_and_belongs_to_many :services
  has_and_belongs_to_many :locations
  has_many :lines
  has_many :appointments, through: :lines

  def self.default_data
    [
      {
        first_name: "Ahmed",
        last_name: "Aboelleef",
        booking_enabled: true,
        booking_color: "#ff00ff",
        title: "alpha",
        notes: "committed employee",
        contract_start: Time.zone.now,
        contract_end: Time.zone.now + 1.year,
      },
      {
        first_name: "Mo",
        last_name: "Monier",
        booking_enabled: true,
        booking_color: "#0000ff",
        title: "beta",
        notes: "almost committed employee",
        contract_start: Time.zone.now,
        contract_end: Time.zone.now + 1.year,
      }
    ]
  end
end
