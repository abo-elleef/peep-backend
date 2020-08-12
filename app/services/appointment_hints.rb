class AppointmentHints
  attr_reader :params

  def initialize(params)
    @params = params
  end

  def call
    staff_hints
  end

  private

  def staff_hints
    staff = Staff.find(params[:staff_id])
    service = Service.find(params[:service_id])
    location = Location.find(params[:location_id])
    starts_at = params[:start_time].to_datetime
    ends_at = (params[:start_time].to_datetime + (params[:duration].to_i).minutes)
    location_closed = location.is_closing?(starts_at, ends_at)
    statuses = staff.status_between(starts_at, ends_at)

    {
        no_shift: location_closed || statuses.include?("no_shift"),
        no_service: staff.has_service?(service),
        staff_busy: statuses.include?("busy"),
        staff_off: statuses.include?("off")
    }

  end
end