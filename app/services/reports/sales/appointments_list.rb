module Reports
  module Sales
    class AppointmentsList

      attr_reader :starts_at, :ends_at, :location_id, :staff_id

      def initialize(params)
        @starts_at = params[:starts_at]
        @ends_at = params[:ends_at]
        @location_id = params[:location_id].presence
        @staff_id = params[:staff_id].presence
      end

      def perform
        {
            appointments: build_appointments_list
        }
      end

      private

      def build_appointments_list
        appointment_services = if location_id.present? && staff_id.present?
                                 AppointmentService.includes(:appointment).where(appointments: {location_id: location_id}).where(staff_id: staff_id, created_at: DateTime.parse(starts_at)..DateTime.parse(ends_at))
                               elsif staff_id.present?
                                 AppointmentService.preload(appointment: :client).where(staff_id: staff_id, created_at: DateTime.parse(starts_at)..DateTime.parse(ends_at))
                               elsif location_id.present?
                                 AppointmentService.includes(appointment: :client).where(appointments: {location_id: location_id}).where(created_at: DateTime.parse(starts_at)..DateTime.parse(ends_at))
                               else
                                 AppointmentService.preload(appointment: :client).where(created_at: DateTime.parse(starts_at)..DateTime.parse(ends_at))
                               end

        appointment_services.map do |appointment_service|
          {
              appointment_id: appointment_service.appointment_id,
              client_id: appointment_service.appointment.client_id,
              client_name: appointment_service.appointment.try(:client_name),
              service: appointment_service.service.try(:name),
              date: appointment_service.appointment.date,
              staff_id: appointment_service.staff.id,
              staff_name: appointment_service.staff.name,
              price: appointment_service.service_price.price,
              status: appointment_service.appointment.status
          }
        end
      end

    end
  end
end