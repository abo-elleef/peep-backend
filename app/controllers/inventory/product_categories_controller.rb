class Inventory::ProductCategoriesController < ApplicationController
  layout :resolve_layout
  def index
    @categories = ProductCategory.preload(:products).peep_filter(params.slice(:search)).order("product_categories.id DESC")
    @pagy, @categories = pagy(@categories, page: page_index, items: page_size)
    # serializers = ActiveModel::Serializer::ArraySerializer.new(categories, each_serializer: ProductCategorySerializer)
    # render json: {data: serializers, meta: pagy_meta_data(pagy)},  status: :ok
  end

  def new
    @category = ProductCategory.new
  end

  def edit
    @category = ProductCategory.find(params[:id])
  end

  def show
    category = ProductCategory.find(params[:id])
    render json: {data: ProductCategorySerializer.new(category)}, status: :ok
  end

  def create
    category = ProductCategory.new(category_params)
    if category.save
      redirect_to inventory_product_categories_path
    else
      render json: category.errors, status: :unprocessable_entity
    end
  end

  def update
    category = ProductCategory.find(params[:id])
    if category.update(category_params)
      redirect_to inventory_product_categories_path
    else
      render json: category.errors, status: :unprocessable_entity
    end
  end

  def destroy
    category = ProductCategory.find(params[:id])
    if category.destroy
      redirect_to inventory_product_categories_path
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

  def category_params
    params.require(:product_category).permit(:name)
  end
end
