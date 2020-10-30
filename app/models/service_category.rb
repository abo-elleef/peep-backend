class ServiceCategory < ApplicationRecord
  default_scope {order("updated_at DESC")}
  include Filterable
  include UserScoped

  has_many :services
  has_many :service_prices, through: :services

  validates_presence_of :name

  scope :by_name, -> (name) { where("name ilike ?", "%" + name + "%")}
  scope :search, ->(search) {where("name ilike ?", "%" + search + "%").
      or(where("description ilike ?", "%" + search + "%")).
      or(where("appointment_color ilike ?", "%" + search + "%")). or all}

  def self.default_data
    [
        {
         name: "Hair ",
         description: "wonder fancy Hair care",
         appointment_color: "#00c9e1"
     }
    ]
  end

  def service_prices_options
    service_prices.map do |service_price|
      [service_price, {duration: service_price.duration}]
    end
  end
end
