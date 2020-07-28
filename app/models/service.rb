class Service < ApplicationRecord
  enum available_for: [everyone: 0, males: 1, females: 2]
end
