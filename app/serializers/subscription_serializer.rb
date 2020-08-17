class SubscriptionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :desc, :starts_at, :ends_at, :pricing_type,
             :pricing_value, :available_for, :duration, :created_at, :updated_at
end
