module Exports
  module CsvGenerators
    class Discounts
      def self.perform(discounts)
        CSV.generate(headers: true) do |csv|
          csv << discount_attributes.keys
          discounts.map do |discount|
            csv << discount_attributes.values.map { |attr| discount.send(attr) }
          end
        end
      end

      private

        def self.discount_attributes
          {
            id: :id,
            name: :name,
            deduct_type: :deduct_type,
            apply_on: :apply_on,
            uniq_per_client: :uniq_per_client,
            limit: :limit,
            starts_at: :starts_at,
            ends_at: :ends_at,
            created_at: :created_at,
          }
        end
    end
  end
end
