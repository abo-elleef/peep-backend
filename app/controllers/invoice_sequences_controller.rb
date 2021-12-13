class InvoiceSequencesController < ApplicationController
  layout "dash"

  def index
    locations = Location.all
    respond_to do |format|
      format.html {
        @locations = locations
      }
      format.json do
        serializers = ActiveModel::Serializer::ArraySerializer.new(locations, each_serializer: LocationSerializer)
        render json: {data: serializers}, status: :ok
      end
    end

  end

  def edit
    @location = Location.find params[:id]
  end

  def update
    location = Location.find(params[:id])
    if location.update(location_params)
    else
      render json: location.errors, status: :unprocessable_entity
    end

  end

  private

  def location_params
    params.require(:location).permit(:id, :num_prefix, :next_num)
  end

end