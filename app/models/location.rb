class Location < ApplicationRecord
  validates_presence_of :user_id
  belongs_to :user
  has_many :locations_staffs
  has_many :staffs, through: :locations_staffs
  has_and_belongs_to_many :services
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
end
