FactoryBot.define do
  factory :client do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    phone { Faker::PhoneNumber.cell_phone_with_country_code }
    email { Faker::Internet.email }
    notify_method { Faker::Number.between(from: 1, to: 10) }
    language { Faker::String.random(length: 4) }
    gender { Faker::Number.between(from: 1, to: 10) }
    birthday { Faker::Date.birthday }
    notes
    global_notes
    street
    suburb
    city
    state
    postal_code
  end
end
