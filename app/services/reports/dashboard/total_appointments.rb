module Reports
  module Dashboard
    class TotalAppointments

      attr_reader :starts_at, :ends_at, :location_id, :staff_id

      def initialize(params)
        @starts_at = params[:starts_at]
        @ends_at = params[:ends_at]
        @location_id = params[:location_id].presence
        @staff_id = params[:staff_id].presence
      end

      def perform
        {
            total_count: build_appointments_list,
            yesterday_count: 0,
            trend_percentage: 0,
            completed_count: 0,
            not_completed_count: 0,
            cancelled_count: 0,
        }
      end

      private

      def build_appointments_list

      end

    end
  end
end