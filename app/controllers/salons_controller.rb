class SalonsController < ApplicationController

  def salon_locations
    user = User.find(params[:id])
    @locations = user.locations
  end

  def location_services
    @location = Location.find(params[:location_id])
    @categories = ServiceCategory.includes(services: :service_prices)
  end

  def location_staffs
    location = Location.find(params[:location_id])
    @services_prices = ServicePrice.includes(service: :staffs).where(service_prices: {id: params["prices"]})
    @staffs = @services_prices.map do |service_price|
      {
          staff_id: service_price.service.staffs.first.id,
          staff_name: service_price.service.staffs.first.name,
          service_name: service_price.service.name,
          service_duration: service_price.duration,
          service_price: service_price.price,
          service_id: service_price.service.id
      }
    end
  end

  def confirm_selection
    
  end

  def service_staffs
    service = Service.find params[service_id]
    service.staffs
  end
end