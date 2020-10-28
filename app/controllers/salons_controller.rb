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
    binding.pry
    location = Location.find(params[:location_id])
    @staffs = location.staffs
  end
  end