class ServicePriceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :service_id, :name, :duration, :pricing_type, :price, :special_price
end