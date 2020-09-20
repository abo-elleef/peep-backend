class DiscountSerializer <  ActiveModel::Serializer
  attributes :id, :name, :deduct_type, :apply_on, :uniq_per_client, :active

end
