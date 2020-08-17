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

  end
end