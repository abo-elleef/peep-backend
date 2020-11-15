module Reports
  class SalesController < ApplicationController
    layout :resolve_layout

    def index
      params[:date] = params[:date].present? ? Date.parse(params[:date]) :  Date.today
      @summary_data = Reports::Sales::TransactionSummary.new(params).perform
      @cash_data = Reports::Sales::CashMovement.new(params).perform
    end

    def transaction_summary
      data = Reports::Sales::TransactionSummary.new(params).perform
      respond_to do |format|
        format.js {
          @data = data
        }
        format.json{
          render json: {data: data}, status: :ok
        }
      end

    end

    def cash_movement
      data = Reports::Sales::CashMovement.new(params).perform
      respond_to do |format|
        format.js {
          @data = data
        }
        format.json{
          render json: {data: data}, status: :ok
        }
      end

    end

    def appointments_list
      data = Reports::Sales::AppointmentsList.new(params).perform
      render json: {data: data}, status: :ok
    end

    #TODO add sales log endpoint
    def sales_by_product
      results = Reports::Sales::SalesReport.new(params).sales_by_product
      render json: {data: results}, status: :ok
    end

    def sales_by_service
      results = Reports::Sales::SalesReport.new(params).sales_by_service
      render json: {data: results}, status: :ok
    end

    def sales_by_location
      results = Reports::Sales::SalesReport.new(params).sales_by_location
      render json: {data: results}, status: :ok
    end

    def sales_by_client
      results = Reports::Sales::SalesReport.new(params).sales_by_client
      render json: {data: results}, status: :ok
    end

    def sales_by_staff
      results = Reports::Sales::SalesReport.new(params).sales_by_staff
      render json: {data: results}, status: :ok
    end

    def recent_sales
      results = Reports::Sales::RecentSalesReport.new(params).perform
      render json: {data: results}, status: :ok
    end

    def appointments
      params[:date] = params[:date].present? ? Date.parse(params[:date]) :  Date.today
      params[:starts_at] = params[:date].beginning_of_day
      params[:ends_at] = params[:date].end_of_day
      appointment_services = AppointmentService.preload(:appointment, :service_price, :staff).
          peep_filter(params.slice(:starts_at, :ends_at, :staff_id, :location_id, :search)).order(id: :desc)
      # params[:date] = Time.zone.parse(params[:date])
      @pagy, @appointment_services = pagy(appointment_services, page: page_index, items: page_size)
      # serializers = ActiveModel::Serializer::ArraySerializer.new(appointment_services, serializer: LineSalesSerializer)
      # render json: {data: serializers, meta: pagy_meta_data(pagy)}, status: :ok
    end

    def invoices
      params[:date] = params[:date].present? ? Date.parse(params[:date]) :  Date.today
      params[:starts_at] = params[:date].beginning_of_day
      params[:ends_at] = params[:date].end_of_day
      invoices = Invoice.preload(:location).peep_filter(params.slice(:location_id, :starts_at, :ends_at, :search))
      @pagy, @invoices = pagy(invoices, page: page_index, items: page_size)
      # serializers = ActiveModel::Serializer::ArraySerializer.new(invoices, each_serializer: InvoiceSerializer)
      # render json: {data: serializers, meta: pagy_meta_data(pagy)}, status: :ok
    end

    def vouchers
      results = Reports::Sales::Vouchers.new(params).perform
      render json: {data: results}, status: :ok
    end

    private

    def resolve_layout
      case action_name
      when 'index', 'appointments', 'invoices'
        'dash'
      end
    end

  end
end