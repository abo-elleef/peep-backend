module ApplicationHelper

  def time_diff(seconds)
    "%02d h %02d m" % [seconds/3600%24, seconds/60%60]
  end


  def service_by_category(services, category)
    services.select {|s| s.service_category_id == category.id}
  end


  def service_available_for_options
    Service.available_fors.keys.map { |a| [a, a] }
  end

  def price_type_options
    ServicePrice.pricing_types.keys.map { |a| [a, a] }
  end

  def extra_time_type_options
    [
        ['Blocked Time', 'blocking_after'],
        ['Processing Time', 'processing_after']
    ]
  end

  def service_categories_options
    ServiceCategory.all.map {|a| [a.name, a.id]}
  end
end