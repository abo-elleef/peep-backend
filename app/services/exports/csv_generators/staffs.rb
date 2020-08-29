module Exports
  module CsvGenerators
    class Staffs

      def self.perform(staffs)
        CSV.generate(headers: true) do |csv|
          csv << ['Id', 'First Name', 'Last Name', 'Mobile Number', 'Email', 'Appointments', 'Start Date', 'End Date', 'Notes', 'Service Commission', 'Product Commission', 'Voucher Commission']
          staffs.map do |staff|
            csv << [:id, :first_name, :last_name, :phone, :email, :booking_enabled, :contract_start, :contract_end, :notes, :service_comm, :product_comm, :discount_comm]
                       .map { |attr| staff.send(attr) }
          end
        end
      end

    end
  end
end
