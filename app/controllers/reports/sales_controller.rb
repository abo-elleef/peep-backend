module Reports
  class SalesController < ApplicationController


    def daily_sales
      transactions = Reports::Sale.new(params).transaction_summary
      cash_movement = Reports::Sale.new(params).cash_movement
      render json: {transactions: transactions, cash_movement: cash_movement}, status: :ok
    end

    def appointments_list
      list = Reports::Sale.new(params).appointments_list
      render json: list, status: :ok
    end

  end
end