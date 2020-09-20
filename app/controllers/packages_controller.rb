class PackagesController < ApplicationController

  def index
    packages = Package.preload(service_prices: :service).peep_filter(params.slice(:name, :search)).desc_order
    serializers = ActiveModel::Serializer::ArraySerializer.new(packages, each_serializer: PackageSerializer)
    render json: {data: serializers}, status: :ok
  end

  def show
    package = Package.find(params[:id])
    render json: {data: PackageSerializer.new(package)}, status: :ok
  end

  def create
    package = PackagePricing.new(Package.new(package_params), package_params).call
    if package.save
      render json: {data: PackageSerializer.new(package)}, status: :created
    else
      render json: package.errors, status: :unprocessable_entity
    end
  end

  def update
    package = Package.find(params[:id])
    package = PackagePricing.new(package, package_params).call if package.pricing_type != package_params[:pricing_type]
    update_service_prices(package, params)
    if package.update(package_params)
      render json: {data: PackageSerializer.new(package)}, status: :ok
    else
      render json: package.errors, status: :unprocessable_entity
    end
  end

  def destroy
    package = Package.find(params[:id])
    if package.destroy
      render json: {}, status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private

  def package_params
    params.require(:package).permit(:name, :description, :available_for, :pricing_type, :deduction_amount,
                                    :final_price, :schedule_type, service_price_ids: [])
  end

  def update_service_prices(package, params)
    package.service_prices  =  ServicePrice.where(id: params[:service_prices].pluck(:id))
  end
end
