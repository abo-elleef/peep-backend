class ProductsController < ApplicationController

  def index
    products = Product.peep_filter(params.slice(:search, :product_category_id, :product_brand_id))
    pagy, products = pagy(products, page: page_index, items: page_size)
    render  json: {data: products, meta: pagy_meta_data(pagy)}, each_serializer: ProductSerializer
  end

  def show
    product = Product.find(params[:id])
    render json: {data: product}, status: :ok, each_serializer: ProductSerializer
  end

  def create
    product = Product.new(product_params)
    if product.save
      render json: {data: product}, each_serializer: ProductSerializer, status: :created
    else
      render json: product.errors, status: :unprocessable_entity
    end
  end

  def update
    product = Product.find(params[:id])
    if product.update(product_params)
      render json: {data: product},  each_serializer: ProductSerializer, status: :ok
    else
      render json: product.errors, status: :unprocessable_entity
    end
  end

  def destroy
    product = Product.find(params[:id])
    if product.destroy
      render json: {}, status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private

  def product_params
    params.require(:product).permit(
        :name, :product_category_id, :product_brand_id, :barcode, :sku, :description,
        :retail_price, :special_price, :tax_included, :enable_commission, :supply_price,
        :retail, :stock_control, :supplier_id, locations_products_attributes: [
        :id, :initial_stock, :reorder_point, :reorder_quantity
    ],
    )
  end
end
