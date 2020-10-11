module Exports
  module CsvGenerators
    class Clients

      def self.perform(clients)
        CSV.generate(headers: true) do |csv|
          csv << client_attributes.keys
          clients.map do |client|
            csv << client_attributes.values.map { |attr| client.send(attr) }
          end
        end
      end

      private

      def self.client_attributes
        {
            id: :id,
            first_name: :first_name,
            last_name: :last_name,
            name: :name,
            phone: :phone,
            email: :email,
            language: :language,
            gender: :gender,
            birthday: :birthday,
            notes: :notes,
            street: :street,
            area: :area,
            block: :block,
            avenue: :avenue,
            building: :building,
            added_at: :created_at
        }
      end

    end
  end
end
