class ProductCategoriesController < ApplicationController

  def index
    categories = ProductCategory.search(params[:search])
    pagy, categories = pagy(categories, page: page_param, items: page_size )
    render json: ProductCategorySerializer.new(categories, meta: pagy_meta_data(pagy)), status: :ok
  end

  def show
    category = ProductCategory.find(params[:id])
    render json: ProductCategorySerializer.new(category), status: :ok
  end

  def create
    category = ProductCategory.new(category_params)
    category.save ? (render json: ProductCategorySerializer.new(category), status: :created) :
        (render json: category.errors,status: :unprocessable_entity)
  end

  def update
    category = ProductCategory.find(params[:id])
    category.update(category_params) ? (render json: ProductCategorySerializer.new(category), status: :ok) :
        (render json: category.errors,status: :unprocessable_entity)
  end

  def destroy
    category = ProductCategory.find(params[:id])
    category.destroy ? (render json: ProductCategorySerializer.new(category), status: :ok) : (render json: {},status: :bad_request)
  end

  private

  def category_params
    params.require(:product_category).permit(:name)
  end
end