module Reports
  module Dashboard
    class AverageSales

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
            total_sales: total_sales,
            yesterday_sales: yesterday_sales,
            trend_percentage: trend_percentage,
            products_sales: products_sales,
            services_sales: services_sales,
        }
      end

      private
      def basic_scope(starts_at, ends_at)
        Line.by_starts_at(starts_at).by_ends_at(ends_at).by_location_ids(location_id).by_staff_ids(staff_id)
      end
      def total_sales
        count = basic_scope(starts_at, ends_at).count
        return 0 if count.zero?
        @total_sales ||= (basic_scope(starts_at, ends_at).sum(:unit_price)).to_f / basic_scope(starts_at, ends_at).count
      end

      def yesterday_sales
        count = basic_scope(starts_at - 24.hour, ends_at - 24.hour).count
        return 0 if count.zero?
        @yesterday_sales ||= basic_scope(starts_at - 24.hour, ends_at - 24.hour).sum(:unit_price).to_f / basic_scope(starts_at - 24.hour, ends_at - 24.hour).count
      end

      def trend_percentage
        return 0 if yesterday_sales.zero? && total_sales.zero?
        return 100 if yesterday_sales.zero?
        ((total_sales - yesterday_sales).to_f / yesterday_sales) * 100
      end

      def products_sales
        count = basic_scope(starts_at, ends_at).where(sellable_type: 'Product').count
        return 0 if count.zero?
        @product_sales ||= basic_scope(starts_at, ends_at).where(sellable_type: 'Product').sum(:unit_price).to_f / basic_scope(starts_at, ends_at).where(sellable_type: 'Product').count
      end

      def services_sales
        count = basic_scope(starts_at, ends_at).where(sellable_type: 'ServicePrice').count
        return 0 if count.zero?
        @services_sales ||= basic_scope(starts_at, ends_at).where(sellable_type: 'ServicePrice').sum(:unit_price).to_f / basic_scope(starts_at, ends_at).where(sellable_type: 'ServicePrice').count
      end

    end
  end
end