class User < ApplicationRecord
  has_secure_password
  # == Constants ============================================================
  # == Extensions ===========================================================
  # == Relationships ========================================================
  has_many :locations
  has_one :user_plan

  # == Validations ==========================================================
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  v
  alidates :password,
            length: { minimum: 6 },
            if: -> { new_record? || !password.nil? }

  # == Scopes ===============================================================
  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================
  def generate_password_token!
    self.reset_password_token = generate_token
    self.reset_password_sent_at = Time.now.utc
    save!
  end

  def password_token_valid?
    (self.reset_password_sent_at + 4.hours) > Time.zone.now
  end

  def reset_password!(password)
    self.reset_password_token = nil
    self.password = password
    save!
  end

  private
  def generate_token
    SecureRandom.hex(10)
  end
end
