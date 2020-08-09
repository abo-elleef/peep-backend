class ProductBrandsController < ApplicationController

  def index
    brands = ProductBrand.peep_filter(params.slice(:name))
    pagy, brands = pagy(brands, page: page_index, items: page_size)
    render json: ProductBrandSerializer.new(brands, meta: pagy_meta_data(pagy)), status: :ok
  end

  def show
    brand = ProductBrand.find(params[:id])
    render json: ProductBrandSerializer.new(brand), status: :ok
  end

  def create
    brand = ProductBrand.new(brand_params)
    if brand.save
      render json: ProductBrandSerializer.new(brand), status: :created
    else
      render json: brand.errors, status: :unprocessable_entity
    end
  end

  def update
    brand = ProductBrand.find(params[:id])
    if brand.update(brand_params)
      render json: ProductBrandSerializer.new(brand), status: :ok
    else
      render json: brand.errors, status: :unprocessable_entity
    end
  end

  def destroy
    brand = ProductBrand.find(params[:id])
    if brand.destroy
      render json: ProductBrandSerializer.new(brand), status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private

  def brand_params
    params.require(:product_brand).permit(:name)
  end
end
