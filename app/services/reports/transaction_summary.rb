module Reports
  class TransactionSummary

    def self.perform(starts_at, ends_at)
      {
          services: build_services(starts_at, ends_at )
      }
    end

    private

    def self.build_services(starts_at, ends_at)
      lines = Line.where(created_at: DateTime.parse(starts_at)..DateTime.parse(ends_at))
                  .pluck("count(id), SUM(price)").flatten
      {
          quantity: lines.first,
          refunds: "",
          total_price: lines.last
      }
    end

  end
end