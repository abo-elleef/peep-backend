module Reports
  module Sales
    class RecentSalesReport
      attr_reader  :location_ids, :to_date

      def initialize(params)
        @location_ids = params[:location_id].present? ? params[:location_id] : Location.all.pluck(:id).join(',')
        @to_date = Date.today - params[:range].to_i.days
      end

      def perform
        appointments_count = Appointment.by_location_ids(location_ids).where("created_at >= ? AND created_at <= ?", to_date, Date.today ).where(status: 5).count
        sales = (to_date..Date.today).map do |day|
          Line.includes(:invoice).where("invoices.location_id IN (?)", location_ids).where("lines.created_at >= ? AND lines.created_at <= ?", day.beginning_of_day, day.end_of_day).sum('lines.unit_price*lines.quantity')
        end
        sales_values =  sales.sum
        appointments = (to_date..Date.today).map do |day|
          Appointment.by_location_ids(location_ids).joins(appointment_services: :service_price).where("appointments.created_at >= ? AND appointments.created_at <= ?", day.beginning_of_day, day.end_of_day).where(status: 5).sum("service_prices.price")
        end
        appointment_values = appointments.sum
        {
            appointment_count: appointments_count,
            appointment_value: appointment_values,
            sales_value: sales_values,
            sales: sales,
            appointments: appointments,
            days: (to_date..Date.today).map { |a| a.strftime("%Y-%m-%d") }
        }
      end
    end
  end
end