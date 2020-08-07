class Client < ApplicationRecord
  validates_presence_of :first_name
  belongs_to :location, optional: true
  enum notify_method: { email: 1 }
  scope :search, -> (search) { search.present? ?  where("first_name ilike ?", "%" + search + "%").
    or(where("last_name ilike ?", "%" + search + "%")).
    or(where(phone: search)) : all }
end
