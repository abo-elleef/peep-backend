class SubscriptionSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :name, :desc, :starts_at, :ends_at, :pricing_type, :limit,
             :pricing_value, :available_for, :duration, :created_at, :updated_at,
             :service_price_ids
end
