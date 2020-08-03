FactoryBot.define do
  factory :service do
    name { Faker::Name.unique.name }
    description { Faker::Lorem.paragraph }
    staff_commission { Faker::Boolean.boolean }
    available_for { Service.available_fors.values.sample }
    extra_time { false }
    service_category factory: :service_category, strategy: :create

  end
end
