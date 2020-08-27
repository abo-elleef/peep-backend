module Exports
  module CsvGenerators
    class Orders

      def self.perform(orders)
        build_csv_file(orders)
      end

      private
      # TODO   add locations and types
      def self.build_csv_file(orders)
        CSV.generate(headers: true) do |csv|
          csv << ['Order no.', 'Created date', 'Supplier', 'Status', 'Total cost']
          orders.map do |order|
            csv << [order.id, order.created_at, order.supplier.name, order.status, order.total_cost]
          end
        end
      end
    end
  end
end