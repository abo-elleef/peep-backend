class AuthenticationController < ApplicationController
  # skip_before_action :authorize_request, only: :login

  # POST /auth/login
  def login
    user = User.find_by_email(params[:email])
    if user&.authenticate(params[:password])
      token = JwtService.encode(user_id: user.id)
      time = Time.now + 24.hours.to_i
      render json: {data: {
          token: token,
          exp: time.strftime("%m-%d-%Y %H:%M"),
          user: UserSerializer.new(user)
      }}, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  private

  def login_params
    params.permit(:email, :password)
  end
end