class Service < ApplicationRecord
  enum available_for: {everyone: 0, males: 1, females: 2}
  has_and_belongs_to_many :staff
end