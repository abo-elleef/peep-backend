class ApplicationController < ActionController::Base
  include Pagy::Backend

  private
    def current_location

    end

    def current_user

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
end
