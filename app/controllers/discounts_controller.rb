class DiscountsController < ApplicationController

  layout :resolve_layout

  def index
    discounts = Discount.peep_filter(params.slice(:name, :search)).desc_order
    @pagy, @discounts = pagy(discounts, page: page_index, items: page_size )
  end

  def new
    @discount = Discount.new
    init_selections
  end

  def edit 
    @discount = Discount.find(params[:id])
    init_selections
  end

  # which phase ?

  def show
    discount = Discount.find(params[:id])
    render json: {data: DiscountSerializer.new(discount)}, status: :ok
  end

  def create
    @discount = Discount.new(discount_params)
    if @discount.save
      redirect_to discounts_path
    else
      render :new
    end
  end

  def update
    discount = Discount.find(params[:id])
    if discount.update(discount_params)
      redirect_to discounts_path
    else
      render :edit
    end
  end

  def delete
    ids  = params[:selected_ids].present? ? params[:selected_ids].split(',') : []
    discounts = Discount.where(id: ids)
    if discounts.destroy_all
      redirect_to discounts_path
    else
      redirect_to discounts_path
    end
  end

  private

  def discount_params
    params.require(:discount).permit(
        :name, :deduct_type, :deduct_value, :apply_on, :limit,
        :uniq_per_client, :starts_at, :ends_at, service_price_ids: []
    )
  end

  def init_selections
    @service_prices = ServicePrice.all
    @categories = ServiceCategory.all
  end

  def resolve_layout
    case action_name
    when "new", "edit", "update", "create"
      "forms"
    else
      "dash"
    end
  end
end