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
        lines = if location_id.present? && staff_id.present?
                  Line.includes(:appointment).where(appointments: {location_id: location_id}).where(staff_id: staff_id, created_at: DateTime.parse(starts_at)..DateTime.parse(ends_at))
                elsif staff_id.present?
                  Line.preload(:appointment).where(staff_id: staff_id, created_at: DateTime.parse(starts_at)..DateTime.parse(ends_at))
                elsif location_id.present?
                  Line.includes(:appointment).where(appointments: {location_id: location_id}).where(created_at: DateTime.parse(starts_at)..DateTime.parse(ends_at))
                else
                  Line.preload(:appointment).where(created_at: DateTime.parse(starts_at)..DateTime.parse(ends_at))
                end

        lines.map do |line|
          {
              appointment_id: line.appointment_id,
              client_id: line.appointment.client_id,
              client_name: '',
              service: line.service_name,
              date: line.appointment.date,
              staff_id: line.staff_id,
              staff_name: line.staff_name,
              price: line.price,
              status: line.appointment.status
          }
        end
      end

    end
  end
end