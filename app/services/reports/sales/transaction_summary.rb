module Reports
  module Sales
    class TransactionSummary

      attr_reader :starts_at, :ends_at, :location_id

      def initialize(params)
        @starts_at = params[:starts_at]
        @ends_at = params[:ends_at]
        @location_id = params[:location_id].presence
      end

      def perform
        {
            services: build_services
        }
      end

      private

      def build_services
        lines = if location_id.present?
                  Line.includes(:appointment).where(appointments: {location_id: location_id}).where(created_at: DateTime.parse(starts_at)..DateTime.parse(ends_at)).pluck("count(lines.id), SUM(lines.price)").flatten
                else
                  Line.where(created_at: DateTime.parse(starts_at)..DateTime.parse(ends_at))
                      .pluck("count(id), SUM(price)").flatten

                end
        {
            quantity: lines.first,
            refunds: "",
            total_price: lines.last
        }
      end

    end
  end
end