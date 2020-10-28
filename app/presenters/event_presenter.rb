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
        color: color
    }
  end

  def title
    event.service_price.name
  end

  def color
    event.service_price&.service&.service_category&.appointment_color || '#293659'
  end
end