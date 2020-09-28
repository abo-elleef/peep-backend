class Voucher < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable
  # == Attributes ===========================================================
     enum expiring_reason: {full_redemption: 0, time_exceeding: 1, other: 2}

  # == Relationships ========================================================
  belongs_to :voucher_type
  has_many  :voucher_usages
  belongs_to :invoice

  # == Validations ==========================================================
  validates_uniqueness_of :code

  # == Scopes ===============================================================
  scope :by_code, -> (code) { where("code ilike ?", "%" + code + "%") }
  # scope :by_client_name, -> (client_name) { joins(invoice: :client).where("clients.first_name ilike ?", "%" + client_name + "%")}

  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================

  def expire?
    unless self.expire
      if current_value == 0 || DateTime.now >= self.voucher_type.ends_at
        self.expire = true
        self.save!
      end
    end
    self.expire
  end
end
