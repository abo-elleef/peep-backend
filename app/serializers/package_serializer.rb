class PackageSerializer < ActiveModel::Serializer
  #include FastJsonapi::ObjectSerializer
  attributes :id, :name, :description, :available_for, :pricing_type, :deduction_amount,
             :final_price, :schedule_type, :percentage_deduction_value, :service_price_ids

  def percentage_deduction_value
    if object.pricing_type == 2
      (object.try(:deduction_amount).to_f / (object.try(:deduction_amount).to_f + object.try(:final_price).to_f)) * 100
    end
  end
end
