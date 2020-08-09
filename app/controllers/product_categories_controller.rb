class ProductCategoriesController < ApplicationController

  def index
    categories = ProductCategory.peep_filter(params.slice(:name))
    pagy, categories = pagy(categories, page: page_index, items: page_size)
    render json: ProductCategorySerializer.new(categories, meta: pagy_meta_data(pagy)), status: :ok
  end

  def show
    category = ProductCategory.find(params[:id])
    render json: ProductCategorySerializer.new(category), status: :ok
  end

  def create
    category = ProductCategory.new(category_params)
    if category.save
      render json: ProductCategorySerializer.new(category), status: :created
    else
      render json: category.errors, status: :unprocessable_entity
    end
  end

  def update
    category = ProductCategory.find(params[:id])
    if category.update(category_params)
      render json: ProductCategorySerializer.new(category), status: :ok
    else
      render json: category.errors, status: :unprocessable_entity
    end
  end

  def destroy
    category = ProductCategory.find(params[:id])
    if category.destroy
      render json: ProductCategorySerializer.new(category), status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private

  def category_params
    params.require(:product_category).permit(:name)
  end
end