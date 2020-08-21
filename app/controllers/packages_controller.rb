class PackagesController < ApplicationController

  def index
    packages = Package.peep_filter(params.slice(:name, :search))
    render json: PackageSerializer.new(packages, include: []), status: :ok
  end

  def show
    package = Package.find(params[:id])
    render json: PackageSerializer.new(package), status: :ok
  end

  def create
    package = Package.new(package_params)
    if package.save
      render json: PackageSerializer.new(package), status: :created
    else
      render json: package.errors, status: :unprocessable_entity
    end
  end

  def update
    package = Package.find(params[:id])
    if package.update(package_params)
      render json: PackageSerializer.new(package), status: :ok
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
    params.require(:package).permit( :name, :description, :available_for, :pricing_type, :deduction_amount,
                                     :final_price, :schedule_type)
  end
end
