class ServicePricesController < ApplicationController

  def index
    services = ServicePrice.preload(service: :service_category)
    serializers = ActiveModel::Serializer::ArraySerializer.new(services, each_serializer: ServicePriceSerializer)
    render json: {data: serializers},  status: :ok
  end
end
