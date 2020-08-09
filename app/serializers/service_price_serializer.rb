class ServicePriceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :service_id, :name, :duration, :type, :price, :special_price
  belongs_to :service
end