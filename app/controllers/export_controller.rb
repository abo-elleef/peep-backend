class ExportController < ApplicationController

  def clients
    if params[:export_type] == "csv"
      send_data ExportCsvClients.new(params).call, filename: "#{__method__}-#{Date.today}.csv"
    else
      send_data ExportXlsClients.new(params).call, filename: "#{__method__}-#{Date.today}.xls"
    end
  end

end
