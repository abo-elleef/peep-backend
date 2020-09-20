class DiscountSerializer < ActiveModel::Serializer
  attributes :id, :name, :deduct_type, :deduct_value, :apply_on, :uniq_per_client, :status, :starts_at, :ends_at,
             :created_at, :updated_at, :limit, :service_price_ids

end
