class AppointmentServiceDetailsSerializer < ActiveModel::Serializer
  attributes :id,  :ends_at, :starts_at, :staff_name, :staff_id, :duration, :name, :price,
             :service_price_id, :discounted_price, :title, :start, :end, :appointment_id

  def name
    object.service_price&.name
  end

  def title
    name
  end

  def start
    object.starts_at
  end

  def end
    object.ends_at
  end

  def price
    object.service_price&.price
  end

  def discounted_price
    object.service_price&.price
  end

  def duration
    now  = Time.zone.now
    begin
      if object.service_price
        Time.at(now + object.service_price.duration.to_f.minutes - now).utc.strftime("%H:%M:%S")
      else
        0
      end
    rescue => e
      debugger
    end
  end

  def staff_name
    object.staff&.name
  end
end
