module Checkout
  class AppointmentCreation

    def self.appointment_builder(params)
      appointment = Appointment.create!(client_id: params[:client_id], location_id: params[:location_id], notes: "created from checkout Page", date: DateTime.now)
      services = params[:lines].select { |line| line[:sellable_type] == 'Service' }
      appointment_service_builder(services, appointment.id)
    end

    def self.appointment_service_builder(new_services, removed_service_ids = [], appointment_id)
      new_services.map do |service|
        AppointmentsService.create(appointment_id: appointment_id, staff_id: service[:staff_id],
                                   service_id: service[:sellable_id], starts_at: service[:starts_at], ends_at: service[:ends_at])

      end

      removed_service_ids.map do |service_id|
        AppointmentsService.find_by(appointment_id: appointment_id, service_id: service_id).delete
      end

    end
  end
end

