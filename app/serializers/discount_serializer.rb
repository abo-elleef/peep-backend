class DiscountSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :deduct_type, :deduct_value, :apply_on, :usage_limit,
      :uniq_per_client, :starts_at, :ends_at, :status
end