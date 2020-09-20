class VoucherType < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  include Filterable

  # == Attributes ===========================================================
  enum expiring_reason: {sold: 0, time_exceeding: 1, other: 2}

  # == Relationships ========================================================
  has_and_belongs_to_many :services
  has_many :vouchers
  # TODO @monier why this exists?
  has_one   :voucher_usage,  as: :usable
  has_many :lines, as: :sellable


  # == Validations ==========================================================
  validates :name, :value, :price, :sales_amount, :title, :color, :starts_at, :ends_at, presence: true

  # == Scopes ===============================================================
  scope :by_name, -> (name) { where("name ilike ?", "%" + name + "%")}
  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================
  def expire?
    unless self.expire
      if sold_amount == sales_amount || DateTime.now >= self.ends_at
        self.expire = true
        self.save!
      end
    end
    self.expire
  end

  def status
    # TODO this should be based on start date and end date
    :active
  end

end
