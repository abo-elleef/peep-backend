module Reports
  module Dashboard
    class TotalAppointmentsGraph

      attr_reader :starts_at, :ends_at, :location_id, :staff_id

      def initialize(params)
        @starts_at = params[:starts_at]
        @ends_at = params[:ends_at]
        @location_id = params[:location_id].presence
        @staff_id = params[:staff_id].presence
      end

      def perform
        {
            days: days,
            appointments: (100..505).to_a.sample(7),
            online_appointments: (100..505).to_a.sample(7),
        }
      end

      private

      def days
        start = Date.today - 6.days
        (start..Date.today).to_a
      end

    end
  end
end