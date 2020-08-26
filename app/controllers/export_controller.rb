class ExportController < ApplicationController

  def clients
    if params[:export_type] == 'csv'
      send_data ExportClients.new(params).call, filename: "#{__method__}-#{Date.today}.csv"
    elsif params[:export_type] == 'xlsx'
      @clients =   params[:location_ids].present? ? Client.where(location_id: params[:location_ids]) : Client.all
      render xlsx: "#{__method__}-List-#{DateTime.now.strftime('%Y-%m-%d-%H:%M:%S')}.xlsx", template: "clients.xlsx.axlsx"
    else
      render json: {}, status: :unprocessable_entity
    end
  end


  def services
    services = ServicePrice.preload(service: :service_category)
    respond_to do |format|
      format.pdf do
        pdf = Exports::ServicesPdf.new(services)
        send_data pdf.render, filename: "Services-List-#{DateTime.now.strftime('%Y-%m-%d-%H:%M:%S')}", type: "application/pdf", disposition: "inline"
      end
    end
  end

end
