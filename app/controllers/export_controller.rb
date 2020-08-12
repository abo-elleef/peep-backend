class ExportController < ApplicationController

  CLIENTS_OPTIONS = %w(csv xls)

  def clients
    if params[:export_type].in? CLIENTS_OPTIONS
      send_data ExportClients.new(params).call, filename: "#{__method__}-#{Date.today}.#{params[:export_type]}"
    else
      render json: {}, status: :unprocessable_entity
    end
  end

end
