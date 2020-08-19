class ExportProducts
  attr_reader :params

  def initialize(params)
    @params = params
  end

  def call
    export_file = "build_#{@params[:export_type]}_file".classify.safe_constantize
    export_file.new("Products", fetch_products, product_attributes).call
  end

  private

  def fetch_products
    Product.all
  end

  def product_attributes
    {
        id: :id,
        name: :name,
        barcode: :barcode,
        sku: :sku,
        product_category_id: :product_category_id,
        product_brand_id: :product_brand_id,
        description: :description,
        retail_price: :retail_price,
        special_price: :special_price,
        enable_commission: :enable_commission,
        supplier_id: :supplier_id,
        supply_price: :supply_price,
        initial_stock: :initial_stock,
        reorder_point: :reorder_point,
        reorder_quantity: :reorder_quantity,
        retail: :retail,
        stock_control: :stock_control,
        updated_at: :updated_at
    }
  end

end
