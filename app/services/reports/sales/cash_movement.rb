module Reports
  module Sales
    class CashMovement

      attr_reader :starts_at, :ends_at, :location_id

      def initialize(params)
        @starts_at = params[:starts_at]
        @ends_at = params[:ends_at]
        @location_id = params[:location_id].presence
      end

      def perform
        {
            cash: build_cash_data
        }
      end

      private

      def build_cash_data
        {
            total: "",
            refunds: ""
        }
      end


    end
  end
end