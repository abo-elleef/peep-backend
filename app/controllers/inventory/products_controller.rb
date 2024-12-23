class Inventory::ProductsController < ApplicationController
  layout :resolve_layout

  def index
    @products = Product.preload(locations_products: :location).peep_filter(params.slice(
        :search, :product_category_ids, :product_brand_ids, :location_ids, :supplier_ids
        )).order("products.id DESC")
    @pagy, @products = pagy(@products, page: page_index, items: page_size)
  end

  def show
    @product = Product.preload(locations_products: :location).find(params[:id])
    # TODO limit access to location based on the current user
    missing_location_ids = Location.all.pluck(:id) - @product.location_ids
    missing_location_ids.map do |id|
      @product.locations_products.build({location_id: id})
    end
    render json: {data: ProductSerializer.new(@product)}, status: :ok
  end

  def new 
    @product = Product.new
    @suppliers = Supplier.all.map {|b| [b.name, b.id]}
    @brands = ProductBrand.all.map {|b| [b.name, b.id]}
    @categories = ProductCategory.all.map {|b| [b.name, b.id]}
  end

  def edit 
    @product = Product.find params[:id]
    @suppliers = Supplier.all.map {|b| [b.name, b.id]}
    @brands = ProductBrand.all.map {|b| [b.name, b.id]}
    @categories = ProductCategory.all.map {|b| [b.name, b.id]}
  end

  def stock_history
    product = Product.find(params[:id])
    lines = Line.where(sellable_id: product.id, sellable_type: 'Product')
    orders = Item.joins(:order).where(product_id: product, orders: {status: :received})

    render json: {data: StockPresenter.new([lines, orders]).present}, status: :ok
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      redirect_to inventory_products_path
    else
      @suppliers = Supplier.all.map {|b| [b.name, b.id]}
      @brands = ProductBrand.all.map {|b| [b.name, b.id]}
      @categories = ProductCategory.all.map {|b| [b.name, b.id]}
      render :new, status: :unprocessable_entity
    end
  end

  def update
    @product = Product.find(params[:id])
    if @product.update(product_params)
      redirect_to inventory_products_path
    else
      @suppliers = Supplier.all.map {|b| [b.name, b.id]}
      @brands = ProductBrand.all.map {|b| [b.name, b.id]}
      @categories = ProductCategory.all.map {|b| [b.name, b.id]}
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    product = Product.find(params[:id])
    product.destroy
    redirect_to inventory_products_path
  end

  private

  def resolve_layout
    case action_name
    when "new", "edit", "update", "create"
      "forms"
    else
      "dash"
    end
  end

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
