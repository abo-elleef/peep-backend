class BootstrapAccount
  attr_reader :user, :params

  def initialize(user, params)
    @user = user
    @params = params
  end

  def call
    location = create_location
    staff = create_staff(location)
    create_invoice_sequence(location)
    create_services(location, staff)
    create_payment_types
    create_cancellation_reasons
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
    staffs = Staff.default_data.map do |staff_params|
      Staff.create(staff_params)
    end
    location.staffs = staffs
  end

  def create_invoice_sequence(location)
    InvoiceSequence.create(InvoiceSequence.default_data.merge(location_id: location.id))
  end

  def create_services(location, staff)
    service_category = ServiceCategory.default_data.map do |category_date|
      ServiceCategory.create(category_date)
    end
    services = Service.default_data.map do |service_data|
      Service.create(service_data.merge(service_category_id: service_category.first.id))
    end
    location.services = services
    staff.map do |staff|
      staff.services = services
    end
  end

  def create_payment_types
    PaymentType.default_data.map do |type|
      PaymentType.create(type)
    end
  end

  def create_cancellation_reasons
    CancellationReason.default_data.map do |reason|
      CancellationReason.create(reason)
    end
  end

end
