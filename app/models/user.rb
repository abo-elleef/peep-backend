class User < ApplicationRecord
  has_secure_password
  # == Constants ============================================================
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


end
