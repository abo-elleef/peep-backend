class Back::AppointmentsController < Back::BackBase
  layout :resolve_layout

  # ...

  # load_and_authorize_resource
  # def index
  #   appointments = Appointment.peep_filter(params.slice(:starts_at, :ends_at, :staff_ids, :location_ids)).
  #       group('appointments.id').limit(1000)
  #   serializers = ActiveModel::Serializer::ArraySerializer.new(appointments, each_serializer: AppointmentSerializer)
  #   render json: {data: serializers}, status: :ok
  # end
  #
  # def show
  #   appointment = Appointment.find(params[:id])
  #   render json: {data: AppointmentDetailsSerializer.new(appointment)}, status: :ok
  # end

  def new
    @appointment = Appointment.new(location_id: params[:location_id])
    @appointment.appointment_services.build(starts_at: params[:date])
    @service_prices = ServicePrice.all.map{|a| [a.name, a.id]}
    @staff = Staff.all.map{|a| [a.name, a.id]}
    @clients = Client.all.map{|a| [a.name, a.id]}
  end


  #
  def create
    debugger
    appointment = Appointment.new(appointment_params)
    if appointment.save!
      redirect_to edit_back_appointment_path(appointment.id)
    else
      render json: appointment.errors, status: :unprocessable_entity
    end
  end

  def edit
    @appointment = Appointment.find(params[:id])
    @service_prices = ServicePrice.unscoped.all.map{|a| [a.name, a.id]}
    @staff = Staff.unscoped.all.map{|a| [a.name, a.id]}
    @clients = Client.all.map{|a| [a.name, a.id]}
  end
  def update
    debugger
    appointment = Appointment.find(params[:id])
    if appointment.update(appointment_params)
      redirect_to edit_back_appointment_path(appointment.id)
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
    @staff = Staff.limit(10)
  end

  def calendar_events
    appointments = Appointment.peep_filter(params.slice(:starts_at, :ends_at, :staff_ids, :location_ids)).
        group('appointments.id').limit(1000)
    events = appointments.map(&:appointment_services).flatten
    serializers = ActiveModel::Serializer::ArraySerializer.new(events, serializer: AppointmentServiceDetailsSerializer)
    render json: serializers, status: :ok
  end

  private

  def appointment_params
    params.require(:appointment).permit(
        :status, :client_id, :location_id, :notes, :cancellation_reason_id,
        appointment_services_attributes: [
            :id, :appointment_id, :staff_id, :service_price_id, :starts_at, :ends_at, :_destroy
        ]
    )
  end

  def resolve_layout
    case action_name
    when "new", "edit"
      "forms"
    else
      "application"
    end
  end

end
