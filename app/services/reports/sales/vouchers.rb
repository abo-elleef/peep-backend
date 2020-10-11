module Reports
  module Sales
    class Vouchers
      attr_reader :params

      def initialize(params)
        @params = params
      end

      def perform
        vouchers = Voucher.preload(:invoice, :voucher_type).peep_filter(params.slice(:code))
        vouchers.map do |voucher|
          {
              issue_date: voucher.created_at,
              expiry_date: voucher.voucher_type.ends_at,
              invoice_number: voucher.invoice.sequence,
              client_id: voucher.invoice.client_id,
              client_name: voucher.invoice.client_name,
              status: voucher.expire? ? 'not valid' : 'valid',
              code: voucher.code,
              total: voucher.voucher_type.value,
              redeemed: (voucher.voucher_type.value - voucher.current_value),
              remaining: voucher.current_value
          }
        end
      end

    end
  end
end