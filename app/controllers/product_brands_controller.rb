class ProductBrandsController < ApplicationController

  def index
    brands = ProductBrand.preload(:products).peep_filter(params.slice(:name))
    pagy, brands = pagy(brands, page: page_index, items: page_size)
    render json: {data: brands, meta: pagy_meta_data(pagy)},
           each_serializer: ProductBrandSerializer, status: :ok
  end

  def show
    brand = ProductBrand.find(params[:id])
    render json: {data: brand}, each_serializer: ProductBrandSerializer, status: :ok
  end

  def create
    brand = ProductBrand.new(brand_params)
    if brand.save
      render json: {data: brand}, each_serializer: ProductBrandSerializer, status: :created
    else
      render json: brand.errors, status: :unprocessable_entity
    end
  end

  def update
    brand = ProductBrand.find(params[:id])
    if brand.update(brand_params)
      render json: {data: brand}, each_serializer: ProductBrandSerializer, status: :ok
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

  def brand_params
    params.require(:product_brand).permit(:name)
  end
end
