class BlockedEventPresenter < EventPresenter
  attr_reader :event

  def initialize(event)
    @event = event
  end

  def to_json
    {
        title: title,
        start: event.starts_at,
        end: event.ends_at,
        display: display,
        color: color
    }
  end

  def title
    event.desc
  end
  def display
    'background'
  end

  def color
    '#aaa'
  end
end