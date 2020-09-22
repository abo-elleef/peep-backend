class OrdersController < ApplicationController

  def index
    orders = Order.preload(:location, :supplier).peep_filter(params.slice(:search, :order_category_id, :order_brand_id))
    pagy, orders = pagy(orders, page: page_index, items: page_size)
    serializers = ActiveModel::Serializer::ArraySerializer.new(orders, each_serializer: OrderSerializer)
    render json: {data: serializers, meta: pagy_meta_data(pagy)},  status: :ok
  end

  def show
    order = Order.find(params[:id])
    render json: {data:OrderSerializer.new(order)}, status: :ok
  end

  def create
    order = Order.new(order_params)
    if order.save
      render json: {data: OrderSerializer.new(order)}, status: :created
    else
      render json: order.errors, status: :unprocessable_entity
    end
  end

  def update
    order = Order.find(params[:id])
    if order.update(order_params)
      render json: {data:OrderSerializer.new(order)}, status: :ok
    else
      render json: order.errors, status: :unprocessable_entity
    end
  end

  def destroy
    order = Order.find(params[:id])
    if order.destroy
      render json: {}, status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private

  def order_params
    params.require(:order).permit(
        :status, :supplier_id, :location_id, items_attributes: [
        :requested_price, :received_price, :received_quantity, :requested_quantity, :product_id
    ]
    )
  end
end
