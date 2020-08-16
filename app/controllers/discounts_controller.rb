class DiscountsController < ApplicationController

  def index
    discounts = Discount.peep_filter(params.slice([:name]))
    render json: DiscountSerializer.new(discounts), status: :ok
  end

  def show
    discount = Discount.find(params[:id])
    render json: DiscountSerializer.new(discount), status: :ok
  end

  def create
    discount = Discount.new(discount_params)
    if discount.save
      render json: DiscountSerializer.new(discount), status: :created
    else
      render json: discount.errors, status: :unprocessable_entity
    end
  end

  def update
    discount = Discount.find(params[:id])
    if discount.update(discount_params)
      render json: DiscountSerializer.new(discount), status: :ok
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
        :name, :deduct_type, :deduct_value, :apply_on, :usage_limit,
        :uniq_per_client, :starts_at, :ends_at
    )
  end
end