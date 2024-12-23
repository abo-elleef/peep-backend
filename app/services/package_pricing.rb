class PackagePricing
  attr_reader :params, :package

  def initialize(package, params)
    @params = params
    @package = package
  end

  def call
    calculate_price_and_deduction
    package
  end

  private

  def calculate_price_and_deduction
    services_prices =  ServicePrice.where(id: params[:services_price_ids]).pluck(:price).sum
    if package.service?
      package.deduction_amount = 0
      package.final_price = services_prices
    elsif package.custom?
      package.deduction_amount= services_prices - params[:final_price]
      package.final_price = params[:final_price]
    elsif package.percentage?

      package.deduction_amount = (params[:deduction_amount] * services_prices) / 100
      package.final_price  = services_prices - ((params[:deduction_amount] * services_prices) / 100)
    elsif package.free?
      package.deduction_amount = services_prices
      package.final_price = 0
    end
  end

end