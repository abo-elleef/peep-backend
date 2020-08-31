module Reports
  module Sales
    class SalesReport

      attr_reader :grouping_param, :ends_at, :starts_at, :location_id

      def initialize(params)
        @grouping_param = params[:group_by]
        @starts_at = params[:starts_at]
        @ends_at = params[:ends_at]
        @location_id = params[:location_id].presence
      end

      #search kinds 1- By Item 2- by type(service, product, voucher) 3- by service  4- by product 5- by location  5- by client 6- by staff 7- by hour  8- by hour of day  9- by day
      # 10- by month 11- by quarter 12- by year 13- log
      def perform
        #
        # Line.select('lines.id, lines.service_id, sum(lines.price) as net_sales, sum(lines.original_price) as gross_sales,  count(*) as items_sold, extract(day from created_at) ').group(:service_id)
        # Line.includes(:appointment).where(appointments: {location_id: location_id}).pluck("count(lines.id), SUM(lines.price)").group_by { |x| x.service_id }
        #     .where(created_at: DateTime.parse(starts_at)..DateTime.parse(ends_at))

        data = <<-SQL.squish
                                SELECT extract(day from lines.created_at) as creation_date,
                                                          sum(lines.price) AS net_sales, sum(lines.original_price) AS gross_sales,
                                                          sum(lines.original_price - lines.price) AS discounts, count(*) AS items_sold
                                FROM lines
                                INNER JOIN appointments ON lines.appointment_id = appointments.id
                                GROUP BY creation_date
        SQL
      end

      def sales_by_service
        <<-SQL.squish
                    SELECT sum(lines.price) AS net_sales, sum(lines.original_price) AS gross_sales,
                                                                                       sum(lines.original_price - lines.price) AS discounts, count(*) AS items_sold, lines.service_id, lines.service_name
                    FROM lines
                    INNER JOIN appointments ON lines.appointment_id = appointments.id
                    GROUP BY lines.service_id, lines.service_name
        SQL
      end

      def sales_by_product
        <<-SQL.squish
                    SELECT sum(lines.price) AS net_sales, sum(lines.original_price) AS gross_sales,
                                                                                       sum(lines.original_price - lines.price) AS discounts, count(*) AS items_sold, lines.service_id, lines.service_name
                    FROM lines
                    INNER JOIN appointments ON lines.appointment_id = appointments.id
                    GROUP BY lines.service_id, lines.service_name
        SQL
      end

      def sales_by_location
        <<-SQL.squish
                  SELECT sum(lines.price) AS net_sales, sum(lines.original_price) AS gross_sales,
                       sum(lines.original_price - lines.price) AS discounts, count(*) AS items_sold, appointments.location_id
                  FROM lines 
                  INNER JOIN appointments ON lines.appointment_id = appointments.id
                  GROUP BY appointments.location_id
        SQL
      end

      def sales_by_client
        <<-SQL.squish
               SELECT sum(lines.price) AS net_sales, sum(lines.original_price) AS gross_sales,
               sum(lines.original_price - lines.price) AS discounts, count(*) AS items_sold, lines.client_id
              FROM lines 
              INNER JOIN appointments ON lines.appointment_id = appointments.id
              GROUP BY lines.client_id
        SQL
      end

      def sales_by_staff
        <<-SQL.squish
                SELECT sum(lines.price) AS net_sales, sum(lines.original_price) AS gross_sales,
	              sum(lines.original_price - lines.price) AS discounts, count(*) AS items_sold, lines.staff_id, lines.staff_name
                FROM lines 
                INNER JOIN appointments ON lines.appointment_id = appointments.id
               GROUP BY lines.staff_id, lines.staff_name
        SQL
      end

      def sales_by_hour
        <<-SQL.squish
                          SELECT date_trunc('hour', lines.created_at) as creation_hour,
                          sum(lines.price) AS net_sales, sum(lines.original_price) AS gross_sales,
                          sum(lines.original_price - lines.price) AS discounts, count(*) AS items_sold
                          FROM lines
                          INNER JOIN appointments ON lines.appointment_id = appointments.id
                          GROUP BY 1

        SQL
      end
    end
  end
end