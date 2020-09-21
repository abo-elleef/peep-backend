module Reports
  module Sales
    class RecentSalesReport
      attr_reader :range, :location_id

      def initialize(params)
        @range = params[:range]
        @location_id = params[:location_id].presence
      end

      def perform
        appointments_count =
            if range == 7
              Appointment.by_location_ids(location_id).joins(appointment_services: :service_price).where("appointments.created_at >= ? AND appointments.created_at <= ?", (Date.today - 7.days), Date.today).where(status: 5).select("count(*) as app_count, SUM(service_prices.price) as values")
            else
              Appointment.by_location_ids(location_id).joins(appointment_services: :service_price).where("appointments.created_at >= ? AND appointments.created_at <= ?", (Date.today - 30.days), Date.today).where(status: 5).select("count(*) as app_count, SUM(service_prices.price) as values")
            end

        {
            appointment_count: 23,
            appointment_value: 1023,
            sales_value: 256,
            sales: [23, 45, 76, 12, 12, 78, 90],
            appointments: [23, 45, 76, 12, 12, 78, 90],
            days: (Date.today..(Date.today + 7.days)).map { |a| a.strftime("%Y-%m-%d") }
        }

      end
    end
  end
end