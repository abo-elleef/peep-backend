require 'prawn/table'
module Exports
  module PdfGenerators
    class Services < Prawn::Document

      def initialize(services)
        super(margin: 70, page_size: 'A4',  page_layout: :landscape)
        @services = services
        export_text
        services_table
      end

      private

      def export_text
        text "Services List!", style: :bold, size: 24
        move_down 15
        text "All time, all staff, all locations, generated, #{DateTime.now.strftime('%A %d %B %Y at %I:%M %p')}"
      end

      def services_table
        move_down 20
        table services_table_rows do
          row(0).font_style = :bold
          columns(0..-1).align = :center
          self.header = true
          self.cell_style = { size: 7 }
        end

      end

      def services_table_rows
        [['Service ID', 'Service Name', 'Retail Price', 'Duration', 'Extra Time', 'Description', 'Category Name', 'Treatment Type', 'AvailableFor',
          'Commissions']] +
            @services.map do |item|
              [item.service_id.to_s, item.service.name.to_s, item.price.to_s, item.duration.to_s, item.service.extra_time.to_s, item.service.description.to_s,
               item.service.service_category.name.to_s,
               item.service.treatment_type_id.to_s, item.service.available_for.to_s, item.service.staff_commission.to_s]
            end
      end
    end
  end
end