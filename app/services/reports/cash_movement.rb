module Reports
  class CashMovement

    def self.perform(starts_at, ends_at)
      {
          cash: build_cash(starts_at, ends_at)
      }
    end

    private

    def self.build_cash(starts_at, ends_at)
    end

  end
end