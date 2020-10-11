class User < ApplicationRecord
  has_many :locations
  has_one :user_plan
end
