FactoryBot.define do
  factory :service_price do
    name { Faker::Name.unique.name }
    duration { Faker::Number.integer }
    pricing_type { ServicePrice.pricing_types.values.sample }
    price { Faker::Number.float }
    special_price { Faker::Number.float * 1.12 }

    service
  end
end
