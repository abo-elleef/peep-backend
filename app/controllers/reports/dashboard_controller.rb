module Reports
  class DashboardController < ApplicationController

    def total_appointments
      data = Reports::Dashboard::TotalAppointments.new(params).perform
      render json: {data: data}, status: :ok
    end

    def total_sales
      data = Reports::Dashboard::TotalSales.new(params).perform
      render json: {data: data}, status: :ok
    end

    def average_sales
      data = Reports::Dashboard::AverageSales.new(params).perform
      render json: {data: data}, status: :ok
    end

    def total_appointments_graph
      data = Reports::Dashboard::TotalAppointmentsGraph.new(params).perform
      render json: {data: data}, status: :ok
    end

    def total_sales_graph
      data = Reports::Dashboard::TotalSalesGraph.new(params).perform
      render json: {data: data}, status: :ok
    end
  end
end