class Voucher < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  # == Attributes ===========================================================
     enum expiring_reason: {full_redemption: 0, time_exceeding: 1, other: 2}

  # == Relationships ========================================================
  belongs_to :voucher_type
  has_many   :voucher_usages

  # == Validations ==========================================================
  validates_uniqueness_of :code

  # == Scopes ===============================================================
  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================

  def expire?
    unless self.expire
      if current_value == 0 || Datetime.now >= self.voucher_type.ends_at
        self.expire = true
        self.save!
      end
    end
    self.expire
  end
end
