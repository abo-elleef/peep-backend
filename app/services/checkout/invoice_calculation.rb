module Checkout
  class InvoiceCalculation

    def self.perform(params)
      total = (params[:lines_attributes].presence&.values || []).sum { |line| line[:unit_price].to_f * [line[:quantity].to_f, 1].max }
      tips_total = (params[:tips_attributes].presence&.values || []).sum { |tip| tip[:value].to_f }
      paid = (params[:payments_attributes].presence&.values || []).sum { |payment| payment[:amount].to_f }
      balance = (total + tips_total) - paid
      {
          total: total,
          balance: balance
      }
    end
  end
end