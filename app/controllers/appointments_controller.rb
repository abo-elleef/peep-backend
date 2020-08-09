class AppointmentsController < ApplicationController

  def index
    appointments = Appointment.peep_filter(params.slice(:start_at, :end_at, :staff_ids, :location_id))
    pagy, appointments = pagy(appointments, page: page_index, items: page_size)
    render json: AppointmentSerializer.new(appointments, include: [:lines], meta: pagy_meta_data(pagy)), status: :ok
  end

  def show
    appointment = Appointment.find(params[:id])
    render json: AppointmentSerializer.new(appointment, include: [:lines]), status: :ok
  end

  def create
    appointment = Appointment.new(appointment_params)
    if appointment.save
      render json: AppointmentSerializer.new(appointment, include: [:lines]), status: :created
    else
      render json: appointment.errors, status: :unprocessable_entity
    end
  end

  def update
    appointment = Appointment.find(params[:id])
    if appointment.update(appointment_params)
      render json: AppointmentSerializer.new(appointment, include: [:lines]), status: :ok
    else
      render json: appointment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    appointment = Appointment.find(params[:id])
    if appointment.destroy
      render json: AppointmentSerializer.new(appointment), status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  def check_hints
    hint = AppointmentHints.new(params).call
    render json: {hint: hint}, status: :ok
  end

  private

  def appointment_params
    params.require(:appointment).permit(:status, :client_id, :location_id,
                                        :notes, :date, lines_attributes: [:id, :appointment_id, :staff_id, :service_id, :price, :original_price, :staff_name,
                                                                          :service_name, :starts_at, :ends_at])
  end
end
