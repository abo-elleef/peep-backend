class AppointmentsController < ApplicationController
  before_action :authenticate_user!
  # load_and_authorize_resource
  layout :resolve_layout
  def index
    appointments = Appointment.peep_filter(params.slice(:starts_at, :ends_at, :staff_ids, :location_ids)).
        group('appointments.id').limit(1000)
    serializers = ActiveModel::Serializer::ArraySerializer.new(appointments, each_serializer: AppointmentSerializer)
    render json: {data: serializers}, status: :ok
  end

  def show
    @appointment = Appointment.find(params[:id])
    respond_to do |format|
      format.html
      format.json {
        render json: {data: AppointmentDetailsSerializer.new(@appointment)}, status: :ok
      }
    end

  end

  def update_status
    appointment = Appointment.find(params[:id])
    appointment.update(status: params[:status])
    redirect_to appointment
  end

  def destroy
    appointment = Appointment.find(params[:id])
    if appointment.destroy
      render json: {}, status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  def check_hints
    hint = AppointmentHints.new(params).call
    render json: {hint: hint}, status: :ok
  end

  def new
    @time = Time.find_zone("Cairo").parse(params[:date]) if params[:date].present?
    params[:date] = (@time || Time.zone.now).to_date
    @appointment = Appointment.new(location_id: params[:location_id])
    @appointment.appointment_services.build(starts_at: @time || Time.zone.now, staff_id: params[:staff_id])
    init_selections
  end

  def create
    appointment = Appointment.new(appointment_params)
    if appointment.save!
      redirect_to appointment
    else
      render json: appointment.errors, status: :unprocessable_entity
    end
  end

  def edit
    @appointment = Appointment.find(params[:id])
    params[:date] = @appointment.appointment_services.first.starts_at.to_date
    init_selections
  end

  def update
    appointment = Appointment.find(params[:id])
    if appointment.update(appointment_params)
      redirect_to appointment
    else
      render json: appointment.errors, status: :unprocessable_entity
    end
  end
  #
  # def destroy
  #   appointment = Appointment.find(params[:id])
  #   if appointment.destroy
  #     render json: {}, status: :ok
  #   else
  #     render json: {}, status: :bad_request
  #   end
  # end
  #
  # def check_hints
  #   hint = AppointmentHints.new(params).call
  #   render json: {hint: hint}, status: :ok
  # end

  def calendar
    @locations = Location.all
    @staff = Staff.all
  end

  def calendar_events
    appointments = Appointment.preload(:appointment_services).peep_filter(params.slice(:starts_at, :ends_at, :staff_id, :location_id)).
        group('appointments.id').limit(1000)
    events = appointments.map(&:appointment_services).flatten
    blocked_events = ClosingShift.all
    events = events.map { |event| EventPresenter.new(event).to_json }
    blocked_events = blocked_events.map { |event| BlockedEventPresenter.new(event).to_json }
    render json: [events, blocked_events].flatten, status: :ok
  end

  private

  def init_selections
    @service_prices = ServicePrice.all
    @staff = Staff.unscoped.all.map{|a| [a.name, a.id]}
    @clients = Client.all.map{|a| [a.name, a.id]}
    @categories = ServiceCategory.all
  end

  def appointment_params
    permitted_params = params.require(:appointment).permit(
        :status, :client_id, :location_id, :notes, :cancellation_reason_id,
        appointment_services_attributes: [
            :id, :appointment_id, :staff_id, :service_price_id, :starts_at, :ends_at, :_destroy
        ]
    )
    set_appointment_date(permitted_params)
  end

  def set_appointment_date(hash)
    return hash if params[:date].blank?
    date = Date.parse(params[:date])
    hash["appointment_services_attributes"].to_h.map do |key, value|
      hash['appointment_services_attributes'][key]['starts_at(1i)'] = date.year.to_s
      hash['appointment_services_attributes'][key]['starts_at(2i)'] = date.month.to_s
      hash['appointment_services_attributes'][key]['starts_at(3i)'] = date.day.to_s
    end
    hash
  end

  def resolve_layout
    case action_name
    when "new", "edit", 'show'
      "forms"
    else
      "dash"
    end
  end
end
