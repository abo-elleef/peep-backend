class Location < ApplicationRecord

  enum :business_type => {
      "hair_alon": 1,
      "beauty_salon": 4,
      "barbershop": 5,
      "nail_Salon": 2,
      "massage": 7,
      "spa": 8,
      "eyebrows_&_lashes": 6,
      "waxing salon": 3,
      "tanning_studio": 13,
      "tattoo_&_piercing": 12,
      "therapy_center": 11,
      "personal_trainer": 10,
      "gym_&_fitness": 9,
      "other": 14
  }

  belongs_to :user
  has_many :lines
  has_many :appointments, through: :lines
  has_many :clients
  has_and_belongs_to_many :staffs
  has_and_belongs_to_many :services

  validates_presence_of :user_id

end
