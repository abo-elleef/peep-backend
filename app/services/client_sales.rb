class ClientSales

  def self.perform(client_id)
    client = Client.find(client_id)
    invoices = client.invoices
    {
        total_sales: invoices.sum(:total),
        outstanding: invoices.sum(:balance),
        bookings: client.appointments.count,
        completed:  client.appointments.completed.count,
        cancelled: client.appointments.cancelled.count
    }
  end
end