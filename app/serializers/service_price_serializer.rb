class ServicePriceSerializer < ActiveModel::Serializer
  attributes :id, :service_id, :name, :duration, :pricing_type, :price, :full_name


  def full_name
    "#{object.service.name} #{object.name}"
  end
end