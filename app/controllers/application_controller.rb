class ApplicationController < ActionController::Base
  include Pagy::Backend
  AUTH_KEY="2777d517df9f50d7890a27bd737412a0"
  skip_before_action :verify_authenticity_token

  after_action do
    @current_user = nil
  end

  private
    def current_location

    end

    def pagy_meta_data(pagy)
      {
        current_page: pagy.page,
        next_page: pagy.next,
        prev_page: pagy.prev,
        total_pages: pagy.pages,
        total_count: pagy.count,
        page_size: pagy.items
      }
    end

    def page_size
      params[:page_size] || 10
    end
    def page_param
      params[:page] || 1
    end

    def auth_token
      request.headers["authorization"]
    end

    def encoded_token(user)
      payload = { user_id: user.id }
      JWT.encode payload, AUTH_KEY, 'HS256'
    end

    def current_user
      return @current_user if @current_user.present? || auth_token.blank?
      data = JWT.decode(auth_token, AUTH_KEY, 'HS256').first
      return nil unless data.present? && data['user_id'].present?
      @current_user = User.find(data['user_id'])
    end

    def peep_authenticate
      render json: {data: 'NOT AUTHORIZED'}, status: :unauthorized unless current_user
    end
end
