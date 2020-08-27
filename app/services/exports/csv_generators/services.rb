module Exports
  module CsvGenerators
    class Services

      def self.perform(services)
        build_csv_file(services)
      end

      private

      def self.build_csv_file(services)
        CSV.generate(headers: true) do |csv|
          csv << ['Service ID', 'Service Name', 'Retail Price', 'Duration', 'Extra Time', 'Description', 'Category Name', 'Treatment Type', 'AvailableFor',
                  'Commissions']
          services.map do |item|
            csv << [item.service_id, item.service.name, item.price, item.duration, item.service.extra_time, item.service.description,
                    item.service.service_category.name, item.service.treatment_type_id, item.service.available_for, item.service.staff_commission]
          end
        end
      end
    end
  end
end
