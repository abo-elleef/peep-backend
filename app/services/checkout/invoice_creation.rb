module Checkout
  class InvoiceCreation
    attr_reader :params

    def initialize(params)
      @params = params
    end

    def call
      values = calculate_invoice
      invoice = create_invoice(values)
      create_invoice_payment(invoice.id, params[:payments])
      create_invoice_lines(invoice.id, params[:lines])
      create_invoice_tips(invoice.id, params[:tips])
      invoice
    end

    private

    def calculate_invoice
      total = params[:items].sum { |item| item[:unit_price] * item[:quantity] }
      tips_total = params[:tips].sum { |tip| tip[:value] }
      paid = params[:payments].sum { |payment| payment[:amount] }
      balance = (total + tips_total) - paid
      {
          total: total,
          balance: balance
      }
    end

    def create_invoice(values)
      Invoice.create!(sequence: next_sequence(params[:location_id]), notes: params[:notes], client_id: params[:client_id],
                      location_id: params[:location_id], status: params[:status], sub_total: values[:total], total: values[:total], balance: values[:balance])
    end

    def next_sequence(location_id)
      # TODO scope invoice with location id
      last_sequence = Invoice.last.try(:sequence).to_i
      location_start_sequence = Location.find(location_id).try(:next_num).to_i
      last_sequence > location_start_sequence ? last_sequence + 1 : location_start_sequence
    end

    def create_invoice_payment(invoice_id, payments)
      payments.map do |payment|
        Payment.create!(invoice_id: invoice_id, payment_type_id: payment[:payment_type_id], amount: payment[:amount], staff_id: payment[:staff_id])
      end
    end

    def create_invoice_lines(invoice_id, lines)
      lines.map do |line|
        Line.create!(invoice_id: invoice_id, sellable_id: line[:sellable_id], sellable_type: line[:sellable_type],
                     quantity: line[:quantity], unit_price: line[:unit_price], original_unit_price: line[:original_unit_price],
                     staff_id: line[:staff_id])
      end
      # items.map do |item|
      #   InvoiceItem.create!(invoice_id: invoice_id, payable_id: item[:payable_id], payable_type: item[:payable_type],
      #                       quantity: item[:quantity], unit_price: item[:unit_price], original_unit_price: item[:original_unit_price],
      #                       staff_id: item[:staff_id])
      # end
    end

    def create_invoice_tips(invoice_id, tips)
      tips.map do |tip|
        Tip.create!(invoice_id: invoice_id, value: tip[:value], staff_id: tip[:staff_id])
      end
    end
  end
end