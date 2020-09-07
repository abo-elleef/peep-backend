module Reports
  module Sales
    class CashMovement

      attr_reader :starts_at, :ends_at, :location_id

      def initialize(params)
        start_date = params[:starts_at] || Time.zone.now.to_s
        end_date = params[:ends_at] || Time.zone.now.to_s
        @starts_at = Time.zone.parse(start_date).beginning_of_day
        @ends_at = Time.zone.parse(end_date).end_of_day
        @location_id = params[:location_id].presence
      end

      def perform
        [build_payment_type, build_vouchers].flatten
      end
      private

      def build_payment_type
        PaymentType.joins(:payments).where(payments: {created_at: starts_at..ends_at}).
            group("payment_types.name").
            select("payment_types.name, Sum(payments.amount)").all.map(&:attributes)
      end

      def build_vouchers
        sum = 123 # @monier build the right query
        {name: "Voucher Redemptions", sum: sum}
      end
    end
  end
end