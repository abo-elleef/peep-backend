class LocationsController < ApplicationController
  layout :resolve_layout
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
    location = Location.find(params[:id])
    render json: {data: LocationSerializer.new(location)}, status: :ok
  end

  def create
    location = Location.new(location_params)
    if location.save
      render json: {data: LocationSerializer.new(location)}, status: :created
    else
      render json: location.errors, status: :unprocessable_entity
    end
  end

  def update
    location = Location.find(params[:id])
    if location.update(location_params)
      render json: {data: LocationSerializer.new(location)}, status: :ok
    else
      render json: location.errors,status: :unprocessable_entity
    end
  end

  def destroy
    location = Location.find(params[:id])
    if location.destroy
      render json: {}, status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private

    def location_params
      params.require(:location).permit(
          :id, :name, :business_type, :phone, :email, :street,
          :building, :area, :block, :avenue, :next_num, :num_prefix
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
