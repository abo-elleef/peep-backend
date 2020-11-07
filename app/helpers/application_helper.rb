module ApplicationHelper
  include Pagy::Frontend


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

  def locations_options
    Location.all.map{ |location| [location.name, location.id] }
  end

  def colors_options
    ['#F3A2BB', '#DBA9E4', '#BDC1E6', '#B1DDF7', '#A2E1ED', '#84D2CB', '#B1E3BF', '#E7F28E', '#FBED82', '#F5C271']
  end

  def gender_options
    [['Unknown', nil], ['Female', 'female'], ['Male', 'male']]
  end

  def referral_options
    ['Walk In', 'walk-in']
  end


  def week_days(start)
    (0..6).to_a.map do |added|
      start + added.days
    end

  end
  def filter_shifts(staff, date)
    @shifts.select {|shift| shift.staff_id == staff.id &&  date.to_date == shift.starts_at.to_date }
  end

end