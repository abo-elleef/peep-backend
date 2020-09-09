class InvoiceBuilder
  attr_reader :appointments_ids

  def initialize(appointments_ids)
    @appointments_ids = appointments_ids
  end

  def call
    appointment_data = build_appointment_hash
    voucher_types_data = build_voucher_type_hash
    build_invoice(appointment_data)
  end

  private

  def build_appointment_hash
    Appointment.joins(:payments, :lines)
        .select("appointments.id AS appointment_id, payments.payment_type_id, payments.amount,
                     lines.price, lines.original_price, lines.staff_name, lines.service_name, lines.starts_at, lines.ends_at")
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

  def build_voucher_type_hash
    VoucherType.joins(:payments, :vouchers)
        .select("voucher_types.id AS voucher_type_id, payments.payment_type_id, payments.amount,
                     voucher_type.price, lines.original_price, lines.staff_name, lines.service_name, lines.starts_at, lines.ends_at")
        .where("voucher_types.id IN (?)", voucher_types_ids)
        .group_by(&:voucher_type_id)
        .map { |voucher_type_id, values|
          {
              voucher_type_id: appointment_id,
              vouchers: lines_data(values),
              payments: payments_data(values),
              total: values.sum(&:price),
              balance: (values.sum(&:price) - values.sum(&:amount)).round(2)
          }
        }.flatten
  end
  def lines_data(values)
    values.map do |data|
      data.slice('staff_name', 'service_name', 'starts_at' , 'ends_at', 'price', 'original_price')
    end
  end

  def payments_data(values)
    values.map do |data|
      data.slice('payment_type_id', 'amount' )
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