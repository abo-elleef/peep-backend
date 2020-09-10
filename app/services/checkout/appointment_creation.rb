module Checkout
  class AppointmentCreation
    attr_reader :params

    def initialize(params)
      @params = params
    end

    def appointment_builder
      lines_attributes = build_lines_data
      create_appointment(lines_attributes)
    end

    def line_builder
      add_new_lines
    end

    private

    def build_lines_data
      lines_raw_data = params[:items].select { |item| item[:payable_type] == "Service" }
      lines_raw_data.map do |line|
        staff = Staff.find(line[:staff_id])
        service = Service.find(line[:payable_id])
        {
            staff_id: staff.id,
            staff_name: staff.name,
            service_id: service.id,
            service_name: service.name,
            client_id: params[:client_id],
            price: line[:unit_price],
            original_price: line[:original_unit_price],
            # TODO remove sellable
            sellable_id: service.id,
            sellable_type: 'Service',
            sellable_name: service.name,
        }
      end
    end

    def add_new_lines
      services = params[:items].select { |item| item[:payable_type] == 'Service' }
      services.map do |service|
        existed_service = Service.find(service[:payable_id])
        staff = Staff.find(service[:staff_id])
        Line.create!(appointment_id: params[:invoiceable_id], staff_id: staff.id,
                     client_id: params[:client_id], price: service[:unit_price], original_price: service[:original_unit_price],
                     sellable_id: existed_service.id, sellable_type: 'Service', sellable_name: existed_service.name,
                     service_id: existed_service.id, service_name: existed_service.name,
                     staff_name: staff.name)
      end
    end

    def create_appointment(lines_attributes)
      Appointment.create!(lines_attributes: lines_attributes, client_id: params[:client_id],
                          location_id: params[:location_id], notes: "created from checkout Page",
                          date: DateTime.now)
    end
  end
end

