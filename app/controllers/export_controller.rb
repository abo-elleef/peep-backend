class ExportController < ApplicationController

  CLIENTS_OPTIONS = %w(csv xls)

  def clients
    if params[:export_type].in? CLIENTS_OPTIONS
      send_data ExportClients.new(params).call, filename: "#{__method__}-#{Date.today}.#{params[:export_type]}"
    else
      render json: {}, status: :unprocessable_entity
    end
  end


  def services
    services = ServicePrice.includes(service: :service_category)
    respond_to do |format|
      format.pdf do
        pdf = Exports::ServicesPdf.new(services)
        send_data pdf.render, filename: "Services-List-#{DateTime.now.strftime('%Y-%m-%d-%H:%M:%S')}", type: "application/pdf", disposition: "inline"
      end
    end
  end

end
