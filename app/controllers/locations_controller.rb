class LocationsController < ApplicationController
  layout :resolve_layout
  before_action :set_location, only: [:show, :order_mini_details, :edit]
  def index
    locations = Location.all
    respond_to do |format|
      format.html {
        @locations = locations
      }
      format.json do
        serializers = ActiveModel::Serializer::ArraySerializer.new(locations, each_serializer: LocationSerializer)
        render json: {data: serializers},  status: :ok
      end
    end

  end

  def show
  end

  def order_mini_details
  end

  def edit
  end

  def new
    @location = Location.new
  end

  def create
    location = Location.new(location_params)
    respond_to do |format|
      format.json {
        if location.save
          render json: {data: LocationSerializer.new(location)}, status: :created
        else
          render json: location.errors, status: :unprocessable_entity
        end
      }
      format.html {
        @location = location
        if @location.save
          redirect_to locations_path
        else
          render :new
        end
      }
    end

  end

  def update
    location = Location.find(params[:id])
    respond_to do |format|
      format.json{
        if location.update(location_params)
          render json: {data: LocationSerializer.new(location)}, status: :ok
        else
          render json: location.errors,status: :unprocessable_entity
        end
      }
      format.html {
        if location.update(location_params)
          redirect_to locations_path
        else
          render :edit
        end
      }
    end

  end

  def destroy
    location = Location.find(params[:id])
    if location.destroy
      redirect_to locations_path
    else
      render json: {}, status: :bad_request
    end
  end

  private

    def set_location
      @location = Location.find(params[:id])
    end
    def location_params
      params.require(:location).permit(
          :id, :name, :business_type, :phone, :email, :street,
          :building, :area, :block, :avenue, :next_num, :num_prefix, images: []
      )
    end

  def resolve_layout
    case action_name
    when "new", "edit", "update", "create"
      "forms"
    else
      "dash"
    end
  end
end
