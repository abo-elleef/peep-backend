class UsersController < ApplicationController
  before_action :peep_authenticate, except: :create

  def whoami
    render json: UserSerializer.new(current_user, {include: [:locations]}), status: :ok
  end

  def create
    user = User.new(user_params)
    if user.save
      BootstrapAccount.new(user, user_params).call
      render json: UserSerializer.new(user, {include: [:locations]}), status: :created
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  def update
    user = User.find(params[:id])
    if user.update(user_params)
      render json: user, status: :ok
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  private
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password_digest, :company_name, :business_type)
    end
end
