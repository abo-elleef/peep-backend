module Customer
  class LocationsController < ApplicationController
    layout 'customer'
    def index
      @locations = Location.unscoped.all
    end

    def show 
      @location = Location.unscoped.find params[:id]
    end
  end
end