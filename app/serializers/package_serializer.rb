class PackageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :description, :available_for, :pricing_type, :deduction_amount,
             :final_price, :schedule_type

  has_and_belongs_to_many :services
end
