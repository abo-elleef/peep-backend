class VoucherType < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable

  # == Attributes ===========================================================
  enum expiring_reason: {sold: 0, time_exceeding: 1, other: 2}

  # == Relationships ========================================================
  has_and_belongs_to_many :services
  has_many :vouchers
  has_one   :voucher_usage,  as: :usable

  # == Validations ==========================================================
  # == Scopes ===============================================================
  # == Callbacks ============================================================
  # == Class Methods ========================================================
  def self.generate_voucher_code
    Digest::MD5.hexdigest("#{SecureRandom.hex(8)}-#{DateTime.now.to_s}")[0, 8].upcase
  end

  # == Instance Methods =====================================================
  def expire?
    unless self.expire
      if sold_amount == sales_amount || Datetime.now >= self.ends_at
        self.expire = true
        self.save!
      end
    end
    self.expire
  end

end
