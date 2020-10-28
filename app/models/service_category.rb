class ServiceCategory < ApplicationRecord
  default_scope {order("updated_at DESC")}
  include Filterable
  include UserScoped

  has_many :services

  validates_presence_of :name

  scope :by_name, -> (name) { where("name ilike ?", "%" + name + "%")}
  scope :search, ->(search) {where("name ilike ?", "%" + search + "%").
      or(where("description ilike ?", "%" + search + "%")).
      or(where("appointment_color ilike ?", "%" + search + "%")). or all}
  scope :by_location_id, -> (location_id) {
    where(id: LocationsService.where(location_id: location_id)
                  .pluck(:service_id).uniq)
  }
  def self.default_data
    [
        {
         name: "Hair ",
         description: "wonder fancy Hair care",
         appointment_color: "#00c9e1"
     }
    ]
  end
end
