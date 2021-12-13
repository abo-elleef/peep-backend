class EventPresenter
  attr_reader :event

  def initialize(event)
    @event = event
  end

  def to_json
    {
        title: title,
        start: event.starts_at,
        end: event.ends_at,
        color: color,
        staff_id: event.staff_id,
        appointment_id: event.appointment_id,
        staff_name: event.staff.name,
        status: event.appointment.status,
        duration: event.service_price.duration,
        name:  event.service_price.full_name,
        price:  event.service_price.price,
        help_text: event.service_price.checkout_help_text(event.staff),
        formatted_time: "#{event.starts_at&.strftime('%H:%M')} - #{event.ends_at&.strftime('%H:%M')}",
        client_name: event.appointment.client_name
    }
  end

  def title
    # event.service_price.name
    time = "#{event.starts_at&.strftime('%H:%M')} - #{event.ends_at&.strftime('%H:%M')}"
    client_name =  event.appointment.client_name
    help_text = event.service_price.checkout_help_text(event.staff)
    "#{time} #{client_name} \n #{help_text}"
  end

  def color
    event.service_price&.service&.service_category&.appointment_color || '#293659'
  end
end