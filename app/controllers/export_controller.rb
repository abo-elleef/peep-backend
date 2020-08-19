class ExportController < ApplicationController

  COMMON_TYPES = %w(csv xls)

  def clients
    export_data("ExportClients", COMMON_TYPES)
  end

  def products
    export_data("ExportProducts", COMMON_TYPES)
  end

  private

  def export_data(class_name, export_types)
    export_class = class_name.safe_constantize
    if params[:export_type].in? export_types
      send_data export_class.new(params).call, filename: "#{caller[0][/`.*'/][1..-2]}-#{Date.today}.#{params[:export_type]}"
    else
      render json: {}, status: :unprocessable_entity
    end
  end

end
