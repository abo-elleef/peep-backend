class InvoicePresenter
  attr_reader :invoices

  def initialize(invoices)
    @invoices = invoices
  end

  def present_invoice
    build_invoice(invoices)
  end

  def present_invoice_index
    invoices.map do |invoice|
      build_invoice_index(invoice)
    end
  end

  private

  def build_invoice(invoice)
    {
        id: invoice.id,
        sequence: invoice.sequence,
        client_id: invoice.client_id,
        client_name: invoice.client_name,
        status: invoice.status,
        date: invoice.created_at,
        location: invoice.location_id,
        tips: invoice.tips,
        lines: invoice.lines.map { |line| {invoice_item: line, sellable_line: line.sellable} },
        vouchers: invoice.vouchers,
        payments: invoice.payments,
        total: invoice.total
    }
  end

  def build_invoice_index(invoice)
    {
        id: invoice.id,
        sequence: invoice.sequence,
        client: invoice.client_id,
        status: invoice.status,
        date: invoice.created_at,
        location_id: invoice.location_id,
        location_name: invoice.location_name,
        tips: invoice.tips.sum(:value),
        total: invoice.total
    }
  end
end