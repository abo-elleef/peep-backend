FactoryBot.define do
  factory :service do
    name { Faker::Name.unique.name }
    description { Faker::Lorem.paragraph( 4) }
    available_for { 0 }
    staff_commission { true }
    extra_time { false }
    service_category factory: :service_category, strategy: :create

  end
end
