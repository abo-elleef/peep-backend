class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  # == Constants ============================================================
  API_KEY = {
      local: "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJleHAiOjE2MDM0NTMxMzd9.nVeoZievydce6o0C72fzvi39xlIJ6L_PEy5dzySyL3E"
  }
  # == Extensions ===========================================================
  # == Relationships ========================================================
  has_many :locations
  has_and_belongs_to_many :roles
  has_one :user_plan

  # == Validations ==========================================================
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password,
            length: { minimum: 6 },
            if: -> { new_record? || !password.nil? }

  # == Scopes ===============================================================
  # == Callbacks ============================================================
  # == Class Methods ========================================================
  def self.current_user_id
    Thread.current[:current_user_id]
  end

  def self.current_user_id=(id)
    Thread.current[:current_user_id] = id
  end
  # == Instance Methods =====================================================
  def has_role?(role)
    roles.pluck(:name).include?(role.to_s)
  end

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
