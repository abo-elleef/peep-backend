class JwtService
  AUTH_KEY="2777d517df9f50d7890a27bd737412a0"
  SECRET_KEY = Rails.application.secrets.secret_key_base. to_s

  def self.encode(payload, exp = 24.hours.from_now)
    binding.pry
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY)
  end

  def self.decode(token)
    decoded = JWT.decode(token, SECRET_KEY)[0]
    HashWithIndifferentAccess.new decoded
  end
end
