module UserScoped
  extend ActiveSupport::Concern
  included do
    default_scope { where(user_id: User.current_user_id) if User.current_user_id.present? } 
  end
end
