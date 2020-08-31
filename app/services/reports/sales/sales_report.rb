module Reports
  module Sales
    class SalesReport
      attr_reader :ends_at, :starts_at, :location_id

      def initialize(params)
        @starts_at = Date.parse(params[:starts_at])
        @ends_at = Date.parse(params[:ends_at])
        @location_id = params[:location_id].presence
      end

      def sales_by_service
        Line.joins(:appointment).select("count(lines.sellable_id) AS items_sold, ROUND(sum(lines.price)::numeric, 3) AS net_sales, ROUND(sum(lines.original_price)::numeric, 3) AS gross_sales,
                            ROUND(sum(lines.original_price - lines.price)::numeric, 3) AS discounts, lines.service_name")
            .where("lines.sellable_type = 'ServicePrice'")
            .where('lines.created_at::date > ? AND lines.created_at::date < ?', starts_at, ends_at)
            .where("appointments.location_id = #{location_id}")
            .group("lines.service_name")
      end

      def sales_by_product
        Line.joins(:appointment).select("count(lines.sellable_id) AS items_sold, ROUND(sum(lines.price)::numeric, 3) AS net_sales, ROUND(sum(lines.original_price)::numeric, 3) AS gross_sales,
                            ROUND(sum(lines.original_price - lines.price)::numeric, 3) AS discounts, lines.sellable_name")
            .where("lines.sellable_type = 'Product'")
            .where('lines.created_at::date >= ? AND lines.created_at::date < ?', starts_at, ends_at)
            .where("appointments.location_id = #{location_id}")
            .group("lines.sellable_name")
      end

      def sales_by_location
        Line.joins(:appointment).select("appointments.location_id, count(*) AS items_sold, ROUND(sum(lines.price)::numeric, 3) AS net_sales,
                                                             ROUND(sum(lines.original_price)::numeric, 3) AS gross_sales, ROUND(sum(lines.original_price - lines.price)::numeric, 3) AS discounts")
            .where("appointments.location_id = #{location_id}")
            .where('lines.created_at::date >= ? AND lines.created_at::date < ?', starts_at, ends_at)
            .group("appointments.location_id")
      end

      def sales_by_client
        Line.joins(:appointment, :client).select("lines.client_id, clients.first_name,count(*) AS items_sold, ROUND(sum(lines.price)::numeric, 3) AS net_sales,
                                                             ROUND(sum(lines.original_price)::numeric, 3) AS gross_sales, ROUND(sum(lines.original_price - lines.price)::numeric, 3) AS discounts")
            .where("appointments.location_id = #{location_id}")
            .where('lines.created_at::date >= ? AND lines.created_at::date < ?', starts_at, ends_at)
            .group("lines.client_id, clients.first_name")
      end

      def sales_by_staff
        Line.joins(:appointment).select("lines.staff_id, lines.staff_name, count(*) AS items_sold, ROUND(sum(lines.price)::numeric, 3) AS net_sales,
                                                             ROUND(sum(lines.original_price)::numeric, 3) AS gross_sales, ROUND(sum(lines.original_price - lines.price)::numeric, 3) AS discounts")
            .where("appointments.location_id = #{location_id}")
            .where('lines.created_at::date >= ? AND lines.created_at::date < ?', starts_at, ends_at)
            .group("lines.staff_id, lines.staff_name")
      end

    end
  end
end