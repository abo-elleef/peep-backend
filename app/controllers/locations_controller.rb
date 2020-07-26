class LocationsController < ApplicationController

  def index
    locations = Location.all
    render json: LocationSerializer.new(locations),status: :ok
  end

  def show
    location = Location.find(params[:id])
    render json: LocationSerializer.new(location), status: :ok
  end

  def create
    location = Location.new(location_params)
    if location.save
      render json: LocationSerializer.new(location), status: :created
    else
      render json: location.errors, status: :unprocessable_entity
    end
  end

  def update
    location = Location.find(params[:id])
    if @location.update(location_params)
      render json: location, status: :ok
    else
      render json: location.errors,status: :unprocessable_entity
    end
  end

  def destroy
    location = Location.new(params[:id])
    if location.destroy
      render json: LocationSerializer.new(location), status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private

    def location_params
      params.require(:location).permit(:id, :name, :business_type, :phone, :email, :street,
                                       :building, :city, :state, :zipcode)
    end
end
