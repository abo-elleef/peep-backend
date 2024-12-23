class ExportController < ApplicationController
  before_action :set_file_name

  def clients
    @clients = params[:location_id].present? ? Client.where(location_id: params[:location_id]) : Client.all
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
    @packages = Package.preload(service_prices: {service: :service_category})
    if params[:export_type] == 'csv'
      send_data Exports::CsvGenerators::Services.perform(@services, @packages), filename: @file_name
    elsif params[:export_type] == 'xlsx'
      render xlsx: @file_name, template: "xlsx_generators/services.xlsx.axlsx"
    elsif params[:export_type] == 'pdf'
      pdf = Exports::PdfGenerators::Services.new(@services, @packages)
      send_data pdf.render, filename: @file_name, disposition: :inline
    else
      render json: {}, status: :unprocessable_entity
    end

  end

  def staffs
    @staffs = params[:location_id].present? ? Staff.where(location_id: params[:location_id]) : Staff.all
    if params[:export_type] == 'csv'
      send_data Exports::CsvGenerators::Staffs.perform(@staffs), filename: @file_name
    elsif params[:export_type] == 'xlsx'
      render xlsx: @file_name, template: "xlsx_generators/staffs.xlsx.axlsx"
    else
      render json: {}, status: :unprocessable_entity
    end
  end

  def products
    @products = Product.preload(:supplier, :product_brand, :product_category)
    if params[:export_type] == 'csv'
      send_data Exports::CsvGenerators::Products.perform(@products), filename: @file_name
    elsif params[:export_type] == 'xlsx'
      render xlsx: @file_name, template: "xlsx_generators/products.xlsx.axlsx"
    else
      render json: {}, status: :unprocessable_entity
    end
  end

  def discounts
    @discounts = Discount.all
    if params[:export_type] == 'csv'
      send_data Exports::CsvGenerators::Discounts.perform(@discounts), filename: @file_name
    elsif params[:export_type] == 'xlsx'
      render xlsx: @file_name, template: "xlsx_generators/discounts.xlsx.axlsx"
    else
      render json: {}, status: :unprocessable_entity
    end
  end

  def orders
    # TODO  add locations and types
    @orders = Order.preload(:supplier).peep_filter(params.slice(:supplier_id, :status))
    if params[:export_type] == 'csv'
      send_data Exports::CsvGenerators::Orders.perform(@orders), filename: @file_name
    elsif params[:export_type] == 'xlsx'
      render xlsx: @file_name, template: "xlsx_generators/orders.xlsx.axlsx"
    else
      render json: {}, status: :unprocessable_entity
    end

  end

  private

  def set_file_name
    @file_name = "#{action_name}-List-#{DateTime.now.strftime('%Y-%m-%d-%H:%M:%S')}.#{params[:export_type]}"
  end

end
