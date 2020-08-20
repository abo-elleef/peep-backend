class InvoiceBuilder
  attr_reader :appointments_ids

  def initialize(appointments_ids)
    @appointments_ids = appointments_ids
  end

  def call
    appointment_data = build_appointment_hash
    build_invoice(appointment_data)
  end

  private

  def build_appointment_hash
    Appointment.joins(:payments, :lines)
        .select("appointments.id as appointment_id, payments.payment_type_id, payments.amount as amount,
                                       lines.price as price, lines.original_price, lines.staff_name,lines.service_name, lines.starts_at, lines.ends_at")
        .where("appointments.id IN (?)", appointments_ids)
        .group_by(&:appointment_id)
        .map { |appointment_id, values|
          {
              appointment_id: appointment_id,
              lines: lines_data(values),
              payments: payments_data(values),
              total: values.sum(&:price),
              balance: (values.sum(&:price) - values.sum(&:amount)).round(2)
          }
        }.flatten
  end

  def lines_data(values)
    values.map do |data|
      {
          staff_name: data.staff_name,
          service_name: data.service_name,
          starts_at: data.starts_at,
          ends_at: data.ends_at,
          price: data.price,
          original_price: data.original_price
      }
    end
  end

  def payments_data(values)
    values.map do |data|
      {
          payment_type_id: data.payment_type_id,
          amount: data.amount
      }
    end
  end

  def build_invoice(appointment_data)
    Invoice.where(appointment_id: appointments_ids).map do |invoice|
      {
          invoice_id: invoice.id,
          invoice_sequence: invoice.sequence,
          creation_date: invoice.created_at,
          appointment_data: appointment_data.find { |appointment| appointment[:appointment_id] == invoice.appointment_id }
      }
    end
  end

end