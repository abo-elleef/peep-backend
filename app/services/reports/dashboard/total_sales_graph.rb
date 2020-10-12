module Reports
  module Dashboard
    class TotalSalesGraph


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
            products: products,
            services: services,
        }
      end

      private

      def days
        start = Date.today - 6.days
        (start..Date.today).to_a
      end

      def products
        days.map do |day|
          Line.by_starts_at(day).by_ends_at(day).by_location_ids(location_id).
            by_staff_ids(staff_id).where(sellable_type: 'Product' ).sum(:unit_price)
        end
      end

      def services
        days.map do |day|
          Line.by_starts_at(day).by_ends_at(day).by_location_ids(location_id).
            by_staff_ids(staff_id).where(sellable_type: 'ServicePrice' ).sum(:unit_price)
        end
      end
    end
  end
end