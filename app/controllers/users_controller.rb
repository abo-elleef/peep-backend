class UsersController < ApplicationController
  before_action :peep_authenticate, except: :create
  before_action :find_user, except: %i[create index]

  def whoami
    render json: {data: UserSerializer.new(current_user)}, status: :ok
  end

  def index
    users = User.all
    serializers = ActiveModel::Serializer::ArraySerializer.new(users, each_serializer: UserSerializer)
    render json: {data: serializers}, status: :ok
  end

  # GET /users/{username}
  def show
    render json: {data: UserSerializer.new(@user)}, status: :ok
  end

  def create
    user = User.new(user_params)
    if user.save
      BootstrapAccount.new(user, user_params).call
      render json: {data: UserSerializer.new(user)}, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  def update
    user = User.find(params[:id])
    if user.update(user_params)
      render json: {data: UserSerializer.new(user)},  status: :ok
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  private

  def find_user
    @user = User.find_by_username!(params[:_username])
  rescue ActiveRecord::RecordNotFound
    render json: { errors: 'User not found' }, status: :not_found
  end

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :username, :password, :password_confirmation, :company_name, :business_type)
    end
end
