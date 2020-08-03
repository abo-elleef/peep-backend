FactoryBot.define do
  factory :service_category do
    name { Faker::Name.unique.name }
    description { Faker::Lorem.paragraph }
    appointment_color { Faker::Color.hex_color }
  end
end
