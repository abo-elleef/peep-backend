class ExportController < ApplicationController
  before_action :set_file_name

  def clients
    @clients = params[:location_ids].present? ? Client.where(location_id: params[:location_ids]) : Client.all
    if params[:export_type] == 'csv'
      send_data Exports::CsvGenerators::Clients.perform(@clients), filename: @file_name
    elsif params[:export_type] == 'xlsx'
      render xlsx: @file_name, template: "xlsx_generators/clients.xlsx.axlsx"
    else
      render json: {}, status: :unprocessable_entity
    end
  end

  def services
    @services = ServicePrice.preload(service: :service_category)
    if params[:export_type] == 'csv'
      send_data Exports::CsvGenerators::Services.perform(@services), filename: @file_name
    elsif params[:export_type] == 'xlsx'
      render xlsx: @file_name, template: "xlsx_generators/services.xlsx.axlsx"
    elsif params[:export_type] == 'pdf'
      respond_to do |format|
        format.pdf do
          pdf = Exports::PdfGenerators::Services.new(@services)
          send_data pdf.render, filename: @file_name, type: "application/pdf", disposition: "inline"
        end
      end
    else
      render json: {}, status: :unprocessable_entity
    end

  end

  def staffs
    @staffs = params[:location_ids].present? ? Staff.where(location_id: params[:location_ids]) : Staff.all
    if params[:export_type] == 'csv'
      send_data Exports::CsvGenerators::Staffs.perform(@staffs), filename: @file_name
    elsif params[:export_type] == 'xlsx'
      render xlsx: @file_name, template: "xlsx_generators/staffs.xlsx.axlsx"
    else
      render json: {}, status: :unprocessable_entity
    end
  end

  private
  def set_file_name
    @file_name =  "#{action_name}-List-#{DateTime.now.strftime('%Y-%m-%d-%H:%M:%S')}.#{params[:export_type]}"
  end

end
