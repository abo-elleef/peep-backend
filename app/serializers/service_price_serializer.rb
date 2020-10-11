class ServicePriceSerializer < ActiveModel::Serializer
  attributes :id, :service_id, :name, :duration, :pricing_type, :price
end