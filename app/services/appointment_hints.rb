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
    statuses = staff.status_between(starts_at, ends_at)
    statuses << :location_closed if location.closing?(starts_at, ends_at)
    statuses << :no_service if staff.has_service?(service)
    {
        hints: statuses
    }

  end
end