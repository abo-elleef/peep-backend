class ExportController < ApplicationController

  def clients
    options =
        {
            csv: ExportCsvClients,
            xls: ExportXlsClients
        }
    send_data options[params[:export_type].to_sym].new(params).call, filename: "#{__method__}-#{Date.today}.#{params[:export_type]}"
  end

end
