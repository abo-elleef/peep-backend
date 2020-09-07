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
      render json: {sales: results}, status: :ok
    end

    def sales_by_location
      results = Reports::Sales::SalesReport.new(params).sales_by_location
      render json: {sales: results}, status: :ok
    end

    def sales_by_client
      results = Reports::Sales::SalesReport.new(params).sales_by_client
      render json: {sales: results}, status: :ok
    end

    def sales_by_staff
      results = Reports::Sales::SalesReport.new(params).sales_by_staff
      render json: {sales: results}, status: :ok
    end

    def recent_sales
      data = {
          appointment_count: 23,
          appointment_value: 1023,
          sales_value: 256,
          sales: [23, 45, 76, 12, 12, 78, 90],
          appointments: [23, 45, 76, 12, 12, 78, 90],
          days: (Date.today..(Date.today + 7.days)).map {|a| a.strftime("%Y-%m-%d")}
      }
      render json: {data: data}, status: :ok
    end


    # def recent_sales
    #   results = Reports::Sales::RecentSalesReport.new(params).sales_by_staff
    #   render json: {sales: results}, status: :ok
    # end
  end
end