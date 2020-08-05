FactoryBot.define do
  factory :client do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    phone { Faker::PhoneNumber.cell_phone }
    email { Faker::Internet.email }
    notify_method { Client.notify_methods.values.first }
    language { Faker::String.random(2) }
    gender { Faker::Number.positive }
    birthday { Faker::Date.birthday }
    notes { Faker::Lorem.paragraph }
    global_notes { Faker::Boolean.boolean }
    location_id { Faker::Number.positive }
    street { Faker::Address.street_name }
    suburb { Faker::Address.community }
    city { Faker::Address.city }
    state { Faker::Address.state }
    postal_code { Faker::Address.postcode }
  end
end
