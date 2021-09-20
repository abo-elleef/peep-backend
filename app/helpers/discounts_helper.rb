module DiscountsHelper
  def discounts_xlsx
    {
      id: :id,
      name: :name,
      deduct_type: :deduct_type,
      apply_on: :apply_on,
      uniq_per_client: :uniq_per_client,
      limit: :limit,
      starts_at: :starts_at,
      ends_at: :ends_at,
      created_at: :created_at,
    }
  end
end