class Back::HomeController < Back::BackBase
  before_action :authenticate_user!
  layout "dash"
  def home
    @locations = Location.all

  end

  def recent_sales
    @data = Reports::Sales::RecentSalesReport.new(params).perform
  end

  def top_staff
    @data = TopStaffs.perform
  end

  def top_services
    @data = TopServices.perform
  end

  def settings

  end

end