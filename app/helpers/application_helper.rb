module ApplicationHelper

  def time_diff(seconds)
    "%02d h %02d m" % [seconds/3600%24, seconds/60%60]
  end


  def service_by_category(services, category)
    services.select {|s| s.service_category_id == category.id}
  end
end