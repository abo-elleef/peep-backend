module Reports
  module Dashboard
    class TotalAppointments

      attr_reader :starts_at, :ends_at, :location_id, :staff_id

      def initialize(params)
        start_date = params[:date] || Time.zone.now.to_s
        end_date = params[:date] || Time.zone.now.to_s
        @starts_at = Time.zone.parse(start_date).beginning_of_day
        @ends_at = Time.zone.parse(end_date).end_of_day
        @location_id = params[:location_id].presence
        @staff_id = params[:staff_id].presence
      end

      def perform
        {
            total_count: total_count,
            yesterday_count: yesterday_count,
            trend_percentage: trend_percentage,
            completed_count: completed_count,
            not_completed_count: not_completed_count,
            cancelled_count: cancelled_count,
        }
      end

      private

      def basic_scope(starts_at, ends_at)
        Appointment.by_starts_at(@starts_at).by_ends_at(@ends_at).by_staff_ids(staff_id).by_location_ids(location_id)
      end

      def total_count
        @total_count ||= basic_scope(starts_at, ends_at).count
      end

      def yesterday_count
        @yesterday_count ||= basic_scope(@starts_at - 24.hour, @ends_at - 24.hour).count
      end

      def trend_percentage
        return 0 if yesterday_count.zero? && total_count.zero?
        return 100 if yesterday_count.zero?
        ((total_count - yesterday_count).to_f / yesterday_count) * 100
      end

      def completed_count
        @completed_count ||= basic_scope(starts_at, ends_at).where(status: 5).count
      end

      def not_completed_count
        @not_completed_count ||= basic_scope(starts_at, ends_at).where(status: 1).count
      end

      def cancelled_count
        @cancelled_count ||= basic_scope(starts_at, ends_at).where(status: 6).count
      end

    end
  end
end