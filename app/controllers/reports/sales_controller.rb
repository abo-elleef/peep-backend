module Reports
  class SalesController < ApplicationController

    def transaction_summary
      data = Reports::Sales::TransactionSummary.new(params).perform
      render json: {data: data}, status: :ok
    end

    def cash_movement
      data = Reports::Sales::CashMovement.new(params).perform
      render json: {data: data}, status: :ok
    end

    def appointments_list
      data = Reports::Sales::AppointmentsList.new(params).perform
      render json: {data: data}, status: :ok
    end

    #TODO add sales log endpoint
    def sales_by_product
      results = Reports::Sales::SalesReport.new(params).sales_by_product
      render json: {sales: results}, status: :ok
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
      appointment_services = AppointmentService.preload(:appointment, :service_price, :staff).
          peep_filter(params.slice(:starts_at, :ends_at, :staff_ids, :location_ids)).order(id: :desc)
      pagy, appointment_services = pagy(appointment_services, page: page_index, items: page_size)
      serializers = ActiveModel::Serializer::ArraySerializer.new(appointment_services, serializer: LineSalesSerializer)
      render json: {data: serializers, meta: pagy_meta_data(pagy)}, status: :ok
    end

    def vouchers
      results = Reports::Sales::Vouchers.new(params).perform
      render json: {data: results}, status: :ok
    end

  end
end