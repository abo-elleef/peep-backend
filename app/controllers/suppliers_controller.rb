class SuppliersController < ApplicationController


  def index
    suppliers = Supplier.peep_filter(params.slice(:search))
    pagy, suppliers = pagy(suppliers, page: page_index, items: page_size )
    render json: SupplierSerializer.new(suppliers, meta: pagy_meta_data(pagy)), status: :ok
  end

  def show
    supplier = Supplier.find(params[:id])
    render json: SupplierSerializer.new(supplier), status: :ok
  end

  def create
    supplier = Supplier.new(supplier_params)

    if supplier.save
      render json: SupplierSerializer.new(supplier), status: :created
    else
      render json: supplier.errors, status: :unprocessable_entity
    end
  end

  def update
    supplier = Supplier.find(params[:id])
    if supplier.update(supplier_params)
      render json: SupplierSerializer.new(supplier), status: :ok
    else
      render json: supplier.errors, status: :unprocessable_entity
    end
  end

  def destroy
    supplier = Supplier.find(params[:id])
    render json: {}, status: supplier.destroy ? :ok : :bad_request
  end

  private

    def supplier_params
      params.require(:supplier).permit(
          :name, :desc, :first_name, :last_name, :email, :phone, :website, :area,
          :block, :avenue, :building
      )
    end
end
