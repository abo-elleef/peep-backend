module Checkout
  class AppointmentCreation
    attr_reader :params

    def initialize(params)
      @params = params
    end

    def perform
      lines_types = params[:lines_attributes].map { |line| line[:sellable_type] }.uniq
      if lines_types.include?('ServicePrice') && params[:appointment_id].present?
        services_ids = params[:lines_attributes].select { |line| line[:sellable_id] }.where(line[:sellable_type] == 'ServicePrice')
        new_services_ids, removed_services_ids = appointment_services?(params[:appointment_id], services_ids)
        if new_services_ids.present? || removed_services_ids.present?
          new_services = params[:lines_attributes].select { |line| line[:sellable_type] == 'ServicePrice' && line[:sellable_id] == new_services_ids }
          appointment_service_builder(new_services, removed_services_ids, params[:appointment_id])
        end
      elsif lines_types.include?('Service') && params[:appointment_id].blank?
        appointment_builder
      end
    end

    private

    def appointment_builder
      appointment = Appointment.create!(client_id: params[:client_id], location_id: params[:location_id], notes: "created from checkout Page", date: DateTime.now)
      services = params[:lines_attributes].select { |line| line[:sellable_type] == 'ServicePrice' }
      appointment_service_builder(services, appointment.id)
    end

    def appointment_service_builder(new_services, removed_service_ids = [], appointment_id)
      new_services.map do |service|
        AppointmentsService.create(appointment_id: appointment_id, staff_id: service[:staff_id],
                                   service_id: service[:sellable_id], starts_at: service[:starts_at], ends_at: service[:ends_at])

      end
      AppointmentsService.where(appointment_id: appointment_id, service_id: removed_service_ids).destroy_all
    end

    def appointment_services?(appointment_id, services_ids)
      appointment_service_ids = Appointment.find(appointment_id).service_price_ids
      new_services = services_ids - appointment_service_ids
      removed_services = appointment_service_ids - services_ids
      return new_services, removed_services
    end
  end
end

