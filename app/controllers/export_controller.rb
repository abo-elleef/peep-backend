class ExportController < ApplicationController

  def clients
    if params[:export_type] == 'csv'
      send_data ExportClients.new(params).call, filename: "#{__method__}-#{Date.today}.csv"
    elsif params[:export_type] == 'xlsx'
      filename = "#{Rails.root}/public/#{__method__}-#{Date.today}.xlsx"
      ExportClients.new(params.merge(filename: filename)).call
      respond_to do |format|
        format.json { render json: {name: filename} }
      end
    else
      render json: {}, status: :unprocessable_entity
    end
  end

end
