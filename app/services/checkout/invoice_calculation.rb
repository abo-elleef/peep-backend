module Checkout
  class InvoiceCalculation

    def self.perform(params)
      total = params[:lines_attributes].sum { |line| line[:unit_price] * line[:quantity] }
      tips_total = params[:tips_attributes].sum { |tip| tip[:value] }
      paid = params[:payments_attributes].sum { |payment| payment[:amount] }
      balance = (total + tips_total) - paid
      {
          total: total,
          balance: balance
      }
    end
  end
end