module Reports
  class Sale

    attr_reader :starts_at, :ends_at, :location_id

    def initialize(options)
      @starts_at = options[:starts_at]
      @ends_at = options[:ends_at]
      @location_id = options[:location_id].presence
    end

    # Reports::Sales.new({starts_at: starts_at, ends_at: ends_at}).transaction_summary
    def transaction_summary
      Reports::TransactionSummary.perform(starts_at, ends_at)
    end

    def cash_movement
      Reports::CashMovement.perform(starts_at, ends_at)
    end

    def appointments_list
      Reports::AppointmentsList.perform(starts_at, ends_at)
    end

  end
end