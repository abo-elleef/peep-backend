module Exports
  module CsvGenerators
    class Services

      def self.perform(services, packages)
        CSV.generate(headers: true) do |csv|
          csv << ['Service ID', 'Service Name', 'Retail Price', 'Duration', 'Extra Time', 'Description', 'Category Name', 'Treatment Type', 'AvailableFor',
                  'Commissions']
          packages.map do |package|
            service = package.services.first
            csv << [package.id, package.name, package.final_price, package.full_duration, service.try(:extra_time), package.description,
                    service.try(:service_category).try(:name), 'Inherited from services', service.try(:available_for), service.try(:staff_commission)]
          end
          services.map do |item|
            csv << [item.service_id, item.service.name, item.price, item.duration, item.service.extra_time, item.service.description,
                    item.service.service_category.name, item.service.treatment_type_id, item.service.available_for, item.service.staff_commission]
          end
        end
      end

    end
  end
end
