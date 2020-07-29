class Service < ApplicationRecord
  enum available_for: {everyone: 0, males: 1, females: 2}
  enum extra_time_type: {processing_after: 0, blocking_after: 1 }
  has_and_belongs_to_many :staff
end