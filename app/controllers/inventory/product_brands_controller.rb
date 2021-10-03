class Inventory::ProductBrandsController < ApplicationController
  layout :resolve_layout
  def index
    @brands = ProductBrand.preload(:products).peep_filter(params.slice(:search))
    @pagy, @brands = pagy(@brands, page: page_index, items: page_size)
    # serializers = ActiveModel::Serializer::ArraySerializer.new(brands, each_serializer: ProductBrandSerializer)
    # render json: {data: serializers, meta: pagy_meta_data(pagy)},  status: :ok
  end

  def show
    brand = ProductBrand.find(params[:id])
    render json: {data: ProductBrandSerializer.new(brand)}, status: :ok
  end

  def create
    brand = ProductBrand.new(brand_params)
    if brand.save
      render json: {data: ProductBrandSerializer.new(brand)}, status: :created
    else
      render json: brand.errors, status: :unprocessable_entity
    end
  end

  def update
    brand = ProductBrand.find(params[:id])
    if brand.update(brand_params)
      render json: {data: ProductBrandSerializer.new(brand)}, status: :ok
    else
      render json: brand.errors, status: :unprocessable_entity
    end
  end

  def destroy
    brand = ProductBrand.find(params[:id])
    if brand.destroy
      render json: {}, status: :ok
    else
      render json: {}, status: :bad_request
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
