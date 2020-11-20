class DiscountsController < ApplicationController

  layout :resolve_layout

  def index
    @discounts = Discount.peep_filter(params.slice(:name, :search)).desc_order
    # serializers = ActiveModel::Serializer::ArraySerializer.new(discounts, each_serializer: DiscountSerializer)
    # render json: {data: serializers},  status: :ok
  end

  def show
    discount = Discount.find(params[:id])
    render json: {data: DiscountSerializer.new(discount)}, status: :ok
  end

  def create
    discount = Discount.new(discount_params)
    if discount.save
      render json: {data: DiscountSerializer.new(discount)}, status: :created
    else
      render json: discount.errors, status: :unprocessable_entity
    end
  end

  def update
    discount = Discount.find(params[:id])
    if discount.update(discount_params)
      render json: {data: DiscountSerializer.new(discount)}, status: :ok
    else
      render json: discount.errors, status: :unprocessable_entity
    end
  end

  def destroy
    discount = Discount.find(params[:id])
    if discount.destroy
      render json: {}, status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private

  def discount_params
    params.require(:discount).permit(
        :name, :deduct_type, :deduct_value, :apply_on, :limit,
        :uniq_per_client, :starts_at, :ends_at, service_price_ids: []
    )
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