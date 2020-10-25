module RequestsHelper
  def request_headers(user)
    [{'Accept' => 'application/json'}, api_auth_token(login(user))].reduce(&:merge)
  end

  def api_auth_token(token)
    {'Authorization' => token}
  end

  private

  def login(user)
    issue_token(user_id: user.id)
  end

  def issue_token(payload)
    JWT.encode(payload, JwtService::SECRET_KEY)
  end
end