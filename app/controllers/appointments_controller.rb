class AppointmentsController < ApplicationController

  def index
    appointments = Appointment.filter(params.slice(:search))
    render json: AppointmentSerializer.new(appointments), status: :ok
  end

  def show
    appointment = Appointment.find(params[:id])
    render json: AppointmentSerializer.new(appointment), status: :ok
  end

  def create
    appointment = Appointment.create!(appointment_params)
    if appointment.save
      render json: AppointmentSerializer.new(appointment), status: :created
    else
      render json: appointment.errors, status: :unprocessable_entity
    end
  end

  def update
    UpdateAppointmentDetails.new(update_params).call
    render json: AppointmentSerializer.new(client), status: :ok
  end

  def destroy
    appointment = Appointment.find(params[:id])
    if appointment.destroy
      render json: AppointmentSerializer.new(appointment), status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private

  def appointment_params
    params.permit(
        :notes,
        :status,
        :client_id,
        :location_id,
        :start_time,
        :end_time,
        details: [
            services: [
                :service_id,
                :service_name,
                :staff_id,
                :staff_name,
                :price,
                :original_price,
                :starts_at,
                :ends_at
            ]
        ]
    )
  end

  def update_params
    params.permit(
        services: [
            :service_id,
            :service_name,
            :staff_id,
            :staff_name,
            :price,
            :original_price,
            :starts_at,
            :ends_at
        ]
    )
  end
end