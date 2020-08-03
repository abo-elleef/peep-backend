class JwtService
  AUTH_KEY="2777d517df9f50d7890a27bd737412a0"
  def self.encode(user)
    payload = { user_id: user.id }
    JWT.encode payload, AUTH_KEY, 'HS256'
  end

  def self.decode(auth_token)
    data = JWT.decode(auth_token, AUTH_KEY, 'HS256').first
    return data if data.present? && data['user_id'].present?
  end
end