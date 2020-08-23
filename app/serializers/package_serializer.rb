class PackageSerializer < ActiveModel::Serializer
  #include FastJsonapi::ObjectSerializer
  attributes :id, :name, :description, :available_for, :pricing_type, :deduction_amount,
             :final_price, :schedule_type

  has_many :service_prices, serializer: ServicePriceSerializer
  has_many :services, serializer: ServiceSerializer
end
