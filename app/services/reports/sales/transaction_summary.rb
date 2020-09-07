module Reports
  module Sales
    class TransactionSummary

      attr_reader :starts_at, :ends_at, :location_id

      def initialize(params)
        start_date = params[:starts_at] || Time.zone.now.to_s
        end_date = params[:ends_at] || Time.zone.now.to_s
        @starts_at = Time.zone.parse(start_date).beginning_of_day
        @ends_at = Time.zone.parse(end_date).end_of_day
        @location_id = params[:location_id].presence
      end

      def perform
        [
            build_services,
            build_products,
            build_vouchers
        ]
      end

      private

      def build_services
        {name: :services}.merge!(build_lines("ServicePrice"))
      end

      def build_products
        {name: :products}.merge!(build_lines("Product"))
      end

      def build_vouchers
        # TODO @monier build the right query
        {name: :vouchers}.merge!({
            quantity: 23,
            total_price: 123345
        })
      end


      def build_lines(type)
        lines = Line.where(created_at: starts_at..ends_at).where(sellable_type: type)
        if location_id.present?
          lines = lines.includes(:appointment).where(appointments: {location_id: location_id})
        end
        lines = lines.pluck("count(lines.id), SUM(lines.price)").flatten
        {
            quantity: lines.first.to_f,
            total_price: lines.last.to_f
        }
      end

    end
  end
end