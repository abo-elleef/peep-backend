FactoryBot.define do
  factory :client do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    phone { Faker::PhoneNumber.cell_phone }
    email { Faker::Internet.email }
    notify_method { Client.notify_methods.values.first }
    language { Faker::String.random( 2) }
    gender { Faker::Number.positive }
    birthday { Faker::Date.birthday }
    global_notes {}
    street {}
    suburb {}
    city {}
    state {}
    postal_code {}
  end
end
