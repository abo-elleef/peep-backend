class Inventory::OrdersController < ApplicationController
  layout :resolve_layout

  def index
    @orders = Order.preload(:location, :supplier).order(id: :desc).order('orders.id DESC')
              .peep_filter(params.slice(:search, :order_category_id, :order_brand_id))
    @pagy, @orders = pagy(@orders, page: page_index, items: page_size)
  end

  def new 
    @order = Order.new
    init_form
  end

  def edit 
    @order = Order.find params[:id]
    init_form
  end

  def show
    @order = Order.find(params[:id])
  end

  def create
    @order = Order.new(order_params)
    if @order.save
      redirect_to inventory_order_path(@order)
    else
      render :new
    end
  end

  def update
    @order = Order.find(params[:id])
    if @order.update(order_params)
      redirect_to inventory_order_path(@order)
    else
      render :edit
    end
  end

  def destroy
    order = Order.find(params[:id])
    order.destroy
    redirect_to inventory_orders_path
  end

  private

  def init_form
    @suppliers = Supplier.all.map {|s| [s.name, s.id]}
    @locations = Location.all.map {|s| [s.name, s.id]}
    @products = Product.all.map {|s| [s.name, s.id]}
  end

  def resolve_layout
    case action_name
    when 'new', 'edit', 'update', 'create'
      'forms'
    else
      'dash'
    end
  end

  def order_params
    params.require(:order).permit(
      :status, :supplier_id, :location_id, items_attributes: [
        :id, :requested_price, :received_price, :received_quantity, :requested_quantity, :product_id
      ]
    )
  end
end
