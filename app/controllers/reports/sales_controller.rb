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
  end
end