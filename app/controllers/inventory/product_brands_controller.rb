class Inventory::ProductBrandsController < ApplicationController
  layout :resolve_layout
  def index
    @brands = ProductBrand.preload(:products).peep_filter(params.slice(:search)).order("product_brands.id DESC")
    @pagy, @brands = pagy(@brands, page: page_index, items: page_size)
    # serializers = ActiveModel::Serializer::ArraySerializer.new(brands, each_serializer: ProductBrandSerializer)
    # render json: {data: serializers, meta: pagy_meta_data(pagy)},  status: :ok
  end

  def new
    @brand = ProductBrand.new
  end

  def edit
    @brand = ProductBrand.find(params[:id])
  end

  def show
    brand = ProductBrand.find(params[:id])
    render json: {data: ProductBrandSerializer.new(brand)}, status: :ok
  end

  def create
    brand = ProductBrand.new(brand_params)
    if brand.save
      redirect_to inventory_product_brands_path
    else
      # show error message with ajax reply
      # render json: brand.errors, status: :unprocessable_entity
    end
  end

  def update
    brand = ProductBrand.find(params[:id])
    if brand.update(brand_params)
      redirect_to inventory_product_brands_path
    else
      # show error message with ajax reply
      # render json: brand.errors, status: :unprocessable_entity
    end
  end

  def destroy
    brand = ProductBrand.find(params[:id])
    if brand.destroy
      redirect_to inventory_product_brands_path
    else
      # show error message with ajax reply
      # render json: brand.errors, status: :unprocessable_entity
    end
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

  def brand_params
    params.require(:product_brand).permit(:name)
  end
end
