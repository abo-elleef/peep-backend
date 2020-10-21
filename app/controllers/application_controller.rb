class ApplicationController < ActionController::Base
  include Pagy::Backend
  before_action :authorize_request
  skip_before_action :verify_authenticity_token

  after_action do
    @current_user = nil
  end

  def authorize_request
    header = request.headers['Authorization']
    header = header.split(' ').last if header
    begin
      @decoded = JwtService.decode(header)
      @current_user = User.find(@decoded[:user_id])
      User.current_user_id = @current_user.id
    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.message }, status: :unauthorized
    rescue JWT::DecodeError => e
      render json: { errors: e.message }, status: :unauthorized
    end
  end
  private

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
      default_page_size = 30
      if params[:page_size].blank?
        default_page_size
      else
        [params[:page_size].to_i, default_page_size].min
      end
    end

    def page_index
      [params[:page].to_i,  1].max
    end

    def auth_token
      header = request.headers['Authorization']
      header.split(' ').last if header
    end

    def current_location
      Location.first
      # return @current_location if @current_location.present? || auth_token.blank?
      # data = JwtService.decode(auth_token)
      # @current_location = Location.find(data['location_id'])
    end

    def current_user
      return @current_user if @current_user.present? || auth_token.blank?
      data = JwtService.decode(auth_token)
      @current_user = User.find(data['user_id'])
    end

    def peep_authenticate
      render json: {data: 'NOT AUTHORIZED'}, status: :unauthorized unless current_user
    end
end
