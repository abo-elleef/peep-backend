class SuppliersController < ApplicationController


  def index
    suppliers = Supplier.peep_filter(params.slice(:name))
    pagy, suppliers = pagy(suppliers, page: page_index, items: page_size )
    render json: {data: suppliers, meta: pagy_meta_data(pagy)},  each_serializer: SupplierSerializer,
           status: :ok
  end

  def show
    supplier = Supplier.find(params[:id])
    render json: {data: supplier},  each_serializer: SupplierSerializer, status: :ok

  end

  def create
    supplier = Supplier.new(supplier_params)

    if supplier.save
      render json: {data: supplier},  each_serializer: SupplierSerializer, status: :created
    else
      render json: supplier.errors, status: :unprocessable_entity
    end
  end

  def update
    supplier = Supplier.find(params[:id])
    if supplier.update(supplier_params)
      render json: {data: supplier},  each_serializer: SupplierSerializer, status: :ok
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
