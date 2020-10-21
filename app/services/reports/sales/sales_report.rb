module Reports
  module Sales
    class SalesReport
      attr_reader :ends_at, :starts_at, :location_id, :staff_id

      def initialize(params)
        @starts_at = Date.parse(params[:starts_at])
        @ends_at = Date.parse(params[:ends_at])
        @location_id = params[:location_id].presence
        @staff_id = params[:staff_id].presence
      end

      def sales_by_service
        scope = Line.joins(:invoice).select("count(lines.sellable_id) AS items_sold, ROUND(sum(lines.unit_price)::numeric, 3) AS net_sales, ROUND(sum(lines.original_unit_price)::numeric, 3) AS gross_sales,
                            ROUND(sum(lines.original_unit_price - lines.unit_price)::numeric, 3) AS discounts, lines.sellable_name")
            .where("lines.sellable_type = 'ServicePrice'")
            .where('lines.created_at::date >= ? AND lines.created_at::date <= ?', starts_at, ends_at)
        scope = scope.where("invoices.location_id = #{location_id}") if location_id.present?
        scope.group("lines.sellable_name")
      end

      def sales_by_product
        scope = Line.joins(:invoice).select("count(lines.sellable_id) AS items_sold, ROUND(sum(lines.unit_price)::numeric, 3) AS net_sales, ROUND(sum(lines.original_unit_price)::numeric, 3) AS gross_sales,
                            ROUND(sum(lines.original_unit_price - lines.unit_price)::numeric, 3) AS discounts, lines.sellable_name")
            .where("lines.sellable_type = 'Product'")
            .where('lines.created_at::date >= ? AND lines.created_at::date <= ?', starts_at, ends_at)
        scope = scope.where("invoices.location_id = #{location_id}") if location_id.present?
        scope.group("lines.sellable_name")
      end

      def sales_by_location
        scope = Line.joins(invoice: :location).select("invoices.location_id, locations.name as sellable_name, count(*) AS items_sold, ROUND(sum(lines.unit_price)::numeric, 3) AS net_sales,
                                                             ROUND(sum(lines.original_unit_price)::numeric, 3) AS gross_sales, ROUND(sum(lines.original_unit_price - lines.unit_price)::numeric, 3) AS discounts")
            .where('lines.created_at::date >= ? AND lines.created_at::date <= ?', starts_at, ends_at)

        scope = scope.where("appointments.location_id = #{location_id}") if location_id.present?
        scope.group("invoices.location_id, locations.name")
      end

      def sales_by_client
        scope = Line.joins(invoice: :client).select("invoices.client_id, clients.first_name, clients.last_name ,count(*) AS items_sold, ROUND(sum(lines.unit_price)::numeric, 3) AS net_sales,
                                                             ROUND(sum(lines.original_unit_price)::numeric, 3) AS gross_sales, ROUND(sum(lines.original_unit_price - lines.unit_price)::numeric, 3) AS discounts")
            .where('lines.created_at::date >= ? AND lines.created_at::date <= ?', starts_at, ends_at)
        scope.where("invoices.location_id = #{location_id}") if location_id.present?
        scope.group("invoices.client_id, clients.first_name, clients.last_name")
      end

      def sales_by_staff
        scope = Line.joins(:invoice).select("lines.staff_id, lines.staff_name AS sellable_name, count(*) AS items_sold, ROUND(sum(lines.unit_price)::numeric, 3) AS net_sales,
                                                             ROUND(sum(lines.original_unit_price)::numeric, 3) AS gross_sales, ROUND(sum(lines.original_unit_price - lines.unit_price)::numeric, 3) AS discounts")
            .where('lines.created_at::date >= ? AND lines.created_at::date <= ?', starts_at, ends_at)
        scope = scope.where("invoices.location_id = #{location_id}") if location_id.present?
        scope.group("lines.staff_id, lines.staff_name")
      end

    end
  end
end