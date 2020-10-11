class StockPresenter
  attr_reader :items
  def initialize(items)
    @items = items.flatten.sort_by {|item| item.created_at}
  end

  def present
    items.map do |item| present_item(item) end
  end

  private

  def present_item(item)
    {
        created_at: item.created_at,
        staff_name: item.staff_name,
        location_name: item.location_name,
        action_type: item.action_type,
        action_id: item.action_id,
        quantity_change: item.quantity_change,
        cost_price: item.cost_price
    }
  end
end
