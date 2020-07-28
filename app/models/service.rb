class Service < ApplicationRecord
  has_and_belongs_to_many :staff
  enum available_for: {everyone: 0, males: 1, females: 2}
end
