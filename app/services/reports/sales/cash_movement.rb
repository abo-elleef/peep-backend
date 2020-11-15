module Reports
  module Sales
    class CashMovement

      attr_reader :starts_at, :ends_at, :location_id

      def initialize(params)
        start_date = params[:date] || Time.zone.now
        end_date = params[:date] || Time.zone.now
        @starts_at = start_date.beginning_of_day
        @ends_at = end_date.end_of_day
        @location_id = params[:location_id].presence
      end

      def perform
        [build_payment_type, build_vouchers].flatten
      end
      private

      def build_payment_type
        # TODO (2) very bad implementation should be handled from db by left join and group
        PaymentType.all.map do |type|
          scope  = Payment.where({payment_type_id: type.id, created_at: starts_at..ends_at})
          if location_id.present?
            scope = scope.joins(:invoice).where(invoices: {location_id: @location_id})
          end
          sum = scope.pluck("amount").map(&:to_f).sum
          {name: type.name, sum: sum}
        end

      end

      def build_vouchers
        sum = Voucher.includes(:voucher_type).where(vouchers: {updated_at: starts_at..ends_at}).sum("voucher_types.value - vouchers.current_value")
        {name: "Voucher Redemptions", sum: sum}
      end
    end
  end
end