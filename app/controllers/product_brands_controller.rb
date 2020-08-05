class ProductBrandsController < ApplicationController

  def index
    brands = ProductBrand.search(params[:search])
    pagy, brands = pagy(brands, page: page_param, items: page_size )
    render json: ProductBrandSerializer.new(brands, meta: pagy_meta_data(pagy)), status: :ok
  end

  def show
    brand = ProductBrand.find(params[:id])
    render json: ProductBrandSerializer.new(brand), status: :ok
  end

  def create
    brand = ProductBrand.new(brand_params)
    brand.save ? (render json: ProductBrandSerializer.new(brand), status: :created) :
        (render json: brand.errors,status: :unprocessable_entity)
  end

  def update
    brand = ProductBrand.find(params[:id])
    brand.update(brand_params) ? (render json: ProductBrandSerializer.new(brand), status: :ok) :
        (render json: brand.errors,status: :unprocessable_entity)
  end

  def destroy
    brand = ProductBrand.find(params[:id])
    brand.destroy ? (render json: ProductBrandSerializer.new(brand), status: :ok) : (render json: {},status: :bad_request)
  end

  private

  def brand_params
    params.require(:product_brand).permit(:name)
  end
end
