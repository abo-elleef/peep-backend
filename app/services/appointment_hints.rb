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
    required_shift = {
        staff_id: params[:staff_id],
        location_id: params[:location_id],
        start_at: params[:start_time].to_datetime,
        end_at: (params[:start_time].to_datetime + (params[:duration].to_i).minutes)
    }

    shift_hint = "#{staff.name} has another booking at #{required_shift[:start_at]}, but your staff can still double-book appointments for them."
    service_hint = "#{staff.name} doesn’t provide #{service.name}, but your staff can still book appointments for them."

    shift_overlap = Shift.overlaps?(required_shift)
    staff_service = !staff.has_service?(service)

    if shift_overlap && staff_service
      shift_hint + ' ' + service_hint
    elsif staff_service
      service_hint
    elsif shift_overlap
      shift_hint
    else
      ''
    end
  end
end