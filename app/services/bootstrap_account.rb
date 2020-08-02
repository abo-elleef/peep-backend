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
      t.string "first_name"
      t.string "last_name"
      t.string "email"
      t.string "password_digest"
      t.string "company_name"
      t.integer "business_type"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false

      Location.create!({
                         name: params[:company_name],
                         business_type: params[:business_type],
                         phone: params[:business_type],
                         email: params[:business_type],
                         street: params[:business_type],
                         building: params[:business_type],
                         city: params[:business_type],
                         state: params[:business_type],
                         zipcode: params[:business_type],
                         user_id: user.id
                       })
    end

    def create_staff(location)
      # create example staff members
    end

    def create_services(location, staff)
      # create example service
    end
end
