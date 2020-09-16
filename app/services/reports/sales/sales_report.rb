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
        Line.joins(:invoice).select("count(lines.sellable_id) AS items_sold, ROUND(sum(lines.unit_price)::numeric, 3) AS net_sales, ROUND(sum(lines.original_unit_price)::numeric, 3) AS gross_sales,
                            ROUND(sum(lines.original_unit_price - lines.unit_price)::numeric, 3) AS discounts, lines.sellable_name")
            .where("lines.sellable_type = 'ServicePrice'")
            .where('lines.created_at::date >= ? AND lines.created_at::date <= ?', starts_at, ends_at)
            .where("invoices.location_id = #{location_id}")
            .group("lines.sellable_name")
      end

      def sales_by_product
        Line.joins(:invoice).select("count(lines.sellable_id) AS items_sold, ROUND(sum(lines.unit_price)::numeric, 3) AS net_sales, ROUND(sum(lines.original_unit_price)::numeric, 3) AS gross_sales,
                            ROUND(sum(lines.original_unit_price - lines.unit_price)::numeric, 3) AS discounts, lines.sellable_name")
            .where("lines.sellable_type = 'Product'")
            .where('lines.created_at::date >= ? AND lines.created_at::date <= ?', starts_at, ends_at)
            .where("invoices.location_id = #{location_id}")
            .group("lines.sellable_name")
      end

      def sales_by_location
        Line.joins(:invoice).select("appointments.location_id, count(*) AS items_sold, ROUND(sum(lines.unit_price)::numeric, 3) AS net_sales,
                                                             ROUND(sum(lines.original_unit_price)::numeric, 3) AS gross_sales, ROUND(sum(lines.original_unit_price - lines.unit_price)::numeric, 3) AS discounts")
            .where("appointments.location_id = #{location_id}")
            .where('lines.created_at::date >= ? AND lines.created_at::date <= ?', starts_at, ends_at)
            .group("invoices.location_id")
      end

      def sales_by_client
        Line.joins(invoice: :client).select("invoices.client_id, clients.first_name,count(*) AS items_sold, ROUND(sum(lines.unit_price)::numeric, 3) AS net_sales,
                                                             ROUND(sum(lines.original_unit_price)::numeric, 3) AS gross_sales, ROUND(sum(lines.original_unit_price - lines.unit_price)::numeric, 3) AS discounts")
            .where("invoices.location_id = #{location_id}")
            .where('lines.created_at::date >= ? AND lines.created_at::date <= ?', starts_at, ends_at)
            .group("invoices.client_id, clients.first_name")
      end

      def sales_by_staff
        Line.joins(:invoice).select("lines.staff_id, lines.staff_name, count(*) AS items_sold, ROUND(sum(lines.unit_price)::numeric, 3) AS net_sales,
                                                             ROUND(sum(lines.original_unit_price)::numeric, 3) AS gross_sales, ROUND(sum(lines.original_unit_price - lines.unit_price)::numeric, 3) AS discounts")
            .where("invoices.location_id = #{location_id}")
            .where('lines.created_at::date >= ? AND lines.created_at::date <= ?', starts_at, ends_at)
            .group("lines.staff_id, lines.staff_name")
      end

    end
  end
end