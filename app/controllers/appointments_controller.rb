class AppointmentsController < ApplicationController
  before_action :set_appointment, only: [:show, :edit, :update, :destroy]

  def index
    appointments = Appointment.all
    render json: AppointmentSerializer.new(appointments), status: :ok
  end

  def show
    appointment = Appointment.find(params[:id])
    render json: AppointmentSerializer.new(appointment), status: :ok
  end

  def create
    appointment = Appointment.find(params[:id])
    if appointment.save
      render json: AppointmentSerializer.new(appointment), status: :created
    else
      render json: appointment.errors, status: :unprocessable_entity
    end
  end

  def update
    appointment = Appointment.find(params[:id])
    if appointment.update(appointment_params)
      render json: AppointmentSerializer.new(appointment), status: :ok
    else
      render json: appointment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /appointments/1
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
      params.require(:appointment).permit(:status, :client_id, :notes, :date)
    end
end
