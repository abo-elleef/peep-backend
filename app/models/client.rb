class Client < ApplicationRecord
  enum notify_method: { email: 1 }

  belongs_to :location, optional: true

  validates_presence_of :first_name

  scope :search, -> (search) { search.present? ?  where("first_name ilike ?", search).
    or(where("last_name ilike ?", search)).
    or(where(phone: search)) : all }
end
