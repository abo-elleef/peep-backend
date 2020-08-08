class Line < ApplicationRecord

  belongs_to :appointment, inverse_of: :lines

  validates :appointment,:staff_id, :service_id, :price, :original_price, :staff_name,
           :service_name, presence: true

end
