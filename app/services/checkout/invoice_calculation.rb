module Checkout
  class InvoiceCalculation

    def self.perform(params)
      total = (params[:lines_attributes].values || []).sum { |line| line[:unit_price].to_f * line[:quantity].to_f }
      tips_total = (params[:tips_attributes].values || []).sum { |tip| tip[:value].to_f }
      paid = (params[:payments_attributes].presence || []).sum { |payment| payment[:amount].to_f }
      balance = (total + tips_total) - paid
      {
          total: total,
          balance: balance
      }
    end
  end
end