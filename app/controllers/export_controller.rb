class ExportController < ApplicationController

  def clients
    send_data ExportClients.new(params).call, filename: "#{__method__}-#{Date.today}.csv"
  end

end
