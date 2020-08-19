class InvoiceBuilder
  attr_reader :params, :invoice_id

  def initialize(appointments_ids)
    appointments_ids
    @params = params
    @invoice_id =  Invoice.where(appointment_id: appointment.id).first_or_create.first.id
  end

  def call
    appointment_data = build_appointment_hash
    build_invoice(appointment_data)
  end

  private

  def build_appointment_hash
    appointment = Appointment.find(params[:appointment_id])
    appointment_data = Appointment.joins(:payments, :lines)
                           .select("payments.payment_type_id, payments.amount,lines.appointment_id,
                                        lines.price, lines.original_price, lines.staff_name,lines.service_name, lines.starts_at, lines.ends_at")
                           .where("appointments.id =#{appointment.id}").to_a
    appointment_hash = appointment_data.map do |data|
      {
          line: {
              staff_name: data.staff_name,
              service_name: data.service_name,
              starts_at: data.starts_at,
              ends_at: data.ends_at,
              price: data.price,
              original_price: data.original_price
          },
          payments: {
              payment_type_id: data.payment_type_id,
              amount: data.amount
          }
      }
    end
    total_price =  appointment_data.sum(&:price).to_f.round(2)
    total_paid = appointment_data.sum(&:amount).to_f.round(2)
    appointment_hash.merge(total: total_price, balance: (total_price - total_paid).to_f.round(2))
  end

  def build_invoice(appointment_data)
    invoice = Invoice.find(invoice_id)
    {
        invoice_id: invoice_id,
        invoice_sequence: invoice.sequence,
        creation_date: invoice.created_at,
        appointment_data: appointment_data,
        sub_total: ""
    }
  end

end