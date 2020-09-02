class Item < ApplicationRecord
  # == Constants ============================================================
  # == Extensions ===========================================================
  # == Relationships ========================================================
  belongs_to :order
  belongs_to :product
  # == Validations ==========================================================
  validates :requested_price, :requested_quantity,  presence:  true
  # == Scopes ===============================================================
  # == Callbacks ============================================================
  # == Class Methods ========================================================
  # == Instance Methods =====================================================


  def staff_name
    order.staff.name
  end
  def location_name
    order.location.name
  end
  def action_type
    'order'
  end
  def action_id
    order_id
  end

  def quantity_change
    received_quantity || requested_quantity
  end
  def cost_price
    (received_quantity * received_price) rescue (requested_quantity * requested_price)
  end

end