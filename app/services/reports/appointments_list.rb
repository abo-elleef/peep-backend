module Reports
  class AppointmentsList

    def self.perform(starts_at, ends_at)
      build_appointments_list(starts_at, ends_at)
    end

    private

    def self.build_appointments_list(starts_at, ends_at)
      lines = Line.preload(:appointment).where(created_at: DateTime.parse(starts_at)..DateTime.parse(ends_at))
      lines.map do |line|
        {
            appointment_id: line.appointment_id,
            client: '',
            service: line.service_name,
            date: line.appointment.date,
            staff: line.staff_name,
            price: line.price,
            status: line.appointment.status
        }
      end
    end

  end
end