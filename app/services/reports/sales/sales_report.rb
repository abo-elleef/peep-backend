module Reports
  module Sales
    class SalesReport

      attr_reader :grouping_param, :ends_at, :starts_at, :location_id

      def initialize(params)
        @grouping_param = params[:group_by]
        @starts_at = DateTime.parse(params[:starts_at])
        @ends_at = DateTime.parse(params[:ends_at])
        @location_id = params[:location_id].presence
      end

      #search kinds 1- By Item 2- by type(service, product, voucher) 3- by service  4- by product 5- by location  5- by client 6- by staff 7- by hour  8- by hour of day  9- by day
      # 10- by month 11- by quarter 12- by year 13- log
      def sales_by_service
        Line.joins(:appointment).select("count(lines.sellable_id) AS items_sold, ROUND(sum(lines.price)::numeric, 2) AS net_sales, ROUND(sum(lines.original_price)::numeric, 2) AS gross_sales,
                            ROUND(sum(lines.original_price - lines.price)::numeric, 2) AS discounts, lines.service_name")
            .where("lines.sellable_type = 'ServicePrice'")
            .where('lines.created_at > ? AND lines.created_at < ?', starts_at, ends_at)
            .where("appointments.location_id = #{location_id}")
            .group("lines.service_name")
      end

      def sales_by_product
        Line.joins(:appointment).select("count(lines.sellable_id) AS items_sold, ROUND(sum(lines.price)::numeric, 2) AS net_sales, ROUND(sum(lines.original_price)::numeric, 2) AS gross_sales,
                            ROUND(sum(lines.original_price - lines.price)::numeric, 2) AS discounts, lines.sellable_name")
            .where("lines.sellable_type = 'Product'")
            .where('lines.created_at > ? AND lines.created_at < ?', starts_at, ends_at)
            .where("appointments.location_id = #{location_id}")
            .group("lines.sellable_name")
      end

      def sales_by_location
        Line.joins(:appointment).select("appointments.location_id, count(*) AS items_sold, ROUND(sum(lines.price)::numeric, 2) AS net_sales,
                                                             ROUND(sum(lines.original_price)::numeric, 2) AS gross_sales, ROUND(sum(lines.original_price - lines.price)::numeric, 2) AS discounts")
            .where("appointments.location_id = #{location_id}")
            .where('lines.created_at > ? AND lines.created_at < ?', starts_at, ends_at)
            .group("appointments.location_id")
      end

      def sales_by_client
        Line.joins(:appointment, :client).select("lines.client_id, clients.first_name,count(*) AS items_sold, ROUND(sum(lines.price)::numeric, 2) AS net_sales,
                                                             ROUND(sum(lines.original_price)::numeric, 2) AS gross_sales, ROUND(sum(lines.original_price - lines.price)::numeric, 2) AS discounts")
            .where("appointments.location_id = #{location_id}")
            .where('lines.created_at > ? AND lines.created_at < ?', starts_at, ends_at)
            .group("lines.client_id, clients.first_name")
      end

      def sales_by_staff
        Line.joins(:appointment).select("lines.staff_id, lines.staff_name, count(*) AS items_sold, ROUND(sum(lines.price)::numeric, 2) AS net_sales,
                                                             ROUND(sum(lines.original_price)::numeric, 2) AS gross_sales, ROUND(sum(lines.original_price - lines.price)::numeric, 2) AS discounts")
            .where("appointments.location_id = #{location_id}")
            .where('lines.created_at > ? AND lines.created_at < ?', starts_at, ends_at)
            .group("lines.staff_id, lines.staff_name")
      end

      # def sales_by_hour
      #   sales = <<-SQL.squish
      #         SELECT creation_hour, count(lines.created_at) AS items_sold,sum(lines.price) AS net_sales, sum(lines.original_price) AS gross_sales,
      #                     sum(lines.original_price - lines.price) AS discounts
      #         FROM generate_series ( date_trunc('hour',  '%{starts_at}'), date_trunc('hour',  '%{ends_at}')  ,'1 hour'::interval) AS creation_hour
      #
      #         INNER JOIN lines ON creation_hour = created_at
      #         INNER JOIN appointments ON lines.appointment_id = appointments.id
      #         GROUP BY creation_hour;
      #   SQL
      #   ActiveRecord::Base.connection.execute(sales)
      # end
    end
  end
end