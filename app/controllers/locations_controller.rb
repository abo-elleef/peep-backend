class LocationsController < ApplicationController
  before_action :set_location, only: [:show, :edit, :update, :destroy]

  def index
    locations = Location.all
    render json: locations,status: :ok, root: 'locations', serializer: LocationSerializer
  end

  def show
    location = Location.find(location_params[:id])
    render json: location,status: :ok, root: 'location', serializer: LocationSerializer
  end

  def create
    location = Location.new(location_params)
    if location.save
      render json: location,status: :created, root: 'location', serializer: LocationSerializer
    else
      render json: location.errors,status: :unprocessable_entity, root: 'location',
             serializer: LocationSerializer
    end
  end

  def update
    location = Location.new(location_params[:id])
    if @location.update(location_params)
      render json: location, status: :ok, root: 'location', serializer: LocationSerializer
    else
      render json: location.errors,status: :unprocessable_entity, root: 'location',
             serializer: LocationSerializer
    end
  end

  def destroy
    location = Location.new(location_params[:id])
    if location.destroy
      render json: location, status: :ok, root: 'location', serializer: LocationSerializer
    else

    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_location
      @location = Location.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def location_params
      params.require(:location).permit(:id, :name, :business_type, :phone, :email, :street,
                                       :building, :city, :state, :zipcode)
    end
end
