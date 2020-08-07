class AppointmentsController < ApplicationController

  def create
    appointment = Appointment.create!(appointment_params)
    if appointment.save
      render json: ServiceSerializer.new(appointment), status: :created
    else
      render json: appointment.errors, status: :unprocessable_entity
    end
  end

  def update
    UpdateAppointmentDetails.new(update_params).call
    render json: { status: "OK", message: "Appointment updated!" }, status: 200
  end

  private

  def appointment_params
    params.permit(
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