class ServicePriceSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :service_id, :name, :duration, :pricing_type, :price, :special_price
end