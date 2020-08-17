FactoryBot.define do
  factory :cancellation_reason do
    name { Faker::Name.unique }
  end
end
