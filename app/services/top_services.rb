class TopServices

  def self.perform
    top_services = AppointmentService.during_current_month.group(:service_price_id).order("count_all DESC").count.first(5).to_h
    last_month = Time.current - 1.month
    top_staffs_last_month = AppointmentService.where(service_price_id: top_services.keys).
        where(created_at: last_month.beginning_of_month..last_month.end_of_month).group(:service_price_id).order("count_all DESC").count
    top_services.map do |service_price_id, count|
      service_price = ServicePrice.find(service_price_id)
      {
          service_name: service_price.service_name,
          current_month: count,
          last_month: top_staffs_last_month[service_price_id]
      }
    end
  end
end