module Exports
  module CsvGenerators
    class Products

      def self.perform(products)
        # TODO   add  For Lost, Location count,  Total stock
        CSV.generate(headers: true) do |csv|
          csv << ['Product name', 'SKU', 'Barcode', 'Description', 'Cost price', 'Full price', 'Special Price', 'Category', 'Brand', 'Supplier']
          products.map do |product|
            csv << [product.name, product.sku, product.barcode, product.description, product.supply_price, product.retail_price, product.special_price,
                    product.product_category.name, product.product_brand.name, product.supplier.name]
          end
        end
      end

    end
  end
end
