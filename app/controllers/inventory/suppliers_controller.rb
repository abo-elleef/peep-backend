class Inventory::SuppliersController < ApplicationController

  layout :resolve_layout
  before_action :set_supplier, only: [:edit, :order_mini_details]

  def index
    @suppliers = Supplier.peep_filter(params.slice(:search)).order("suppliers.id DESC")
    @pagy, @suppliers = pagy(@suppliers,{page: page_index, items: page_size})
    # serializers = ActiveModel::Serializer::ArraySerializer.new(suppliers, each_serializer: SupplierSerializer)
    # render json: {data: serializers, meta: pagy_meta_data(pagy)}, status: :ok
  end

  def new
    @supplier = Supplier.new
  end

  def edit
  end

  def order_mini_details
  end

  def show
    supplier = Supplier.find(params[:id])
    render json: {data: SupplierSerializer.new(supplier)}, status: :ok
  end

  def create
    supplier = Supplier.new(supplier_params)

    if supplier.save
      redirect_to inventory_suppliers_path
    else
      render json: supplier.errors, status: :unprocessable_entity
    end
  end

  def update
    supplier = Supplier.find(params[:id])
    if supplier.update(supplier_params)
      redirect_to inventory_suppliers_path
    else
      render json: supplier.errors, status: :unprocessable_entity
    end
  end

  def destroy
    supplier = Supplier.find(params[:id])
    supplier.destroy
    redirect_to inventory_suppliers_path
  end

  private

  def set_supplier
    @supplier = Supplier.find params[:id]
  end

  def resolve_layout
    case action_name
    when "new", "edit", "update", "create"
      "forms"
    else
      "dash"
    end
  end

  def supplier_params
    params.require(:supplier).permit(
        :name, :desc, :first_name, :last_name, :email, :phone, :website, :area,
        :block, :avenue, :building, :street
    )
  end
end
