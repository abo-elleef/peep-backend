FactoryBot.define do
  factory :service do
    name { Faker::Name.unique.name }
    description { Faker::Lorem.paragraph( 4) }
    available_for { 'everyone' }
    staff_commission { true }
    extra_time { false }
    user
    service_category { FactoryBot.build(:service_category, user_id: user_id) }
  end
end
