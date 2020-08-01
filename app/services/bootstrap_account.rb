class BootstrapAccount
  attr_reader :user

  def initialize(user)
    @user = user
  end

  def call
    location = create_location
    staff = create_staff(location)
    create_services(location, staff)

  end

  private

    def create_location
      # create location with data from user
    end

    def create_staff(location)
      # create example staff members
    end

    def create_services(location, staff)
      # create
    end
end
