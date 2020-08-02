class BootstrapAccount
  attr_reader :user, :params

  def initialize(user, params)
    @user = user
    @params = params
  end

  def call
    location = create_location
    staff = create_staff(location)
    create_services(location, staff)

  end

  private

    def create_location
      Location.create!({
                         name: params[:company_name],
                         business_type: params[:business_type],
                         email: params[:business_type],
                         user_id: user.id
                       })
    end

    def create_staff(location)
      staffs = Staff.default_data.map do |staff_params| Staff.create(staff_params) end
      location.staffs = staffs
    end

    def create_services(location, staff)
      services = Service.default_data.map do |service_data| Service.create(service_data) end
      location.services = services
      staff.map do |staff| staff.services  = services end
    end
end
