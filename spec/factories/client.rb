FactoryBot.define do
  factory :client do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    phone { Faker::PhoneNumber.cell_phone }
    email { Faker::Internet.email }
    notify_method { Client.notify_methods.values.first }
    language { Faker::String.random(2) }
    gender {  Client.genders.values.sample }
    birthday { Faker::Date.birthday }
    notes { Faker::Lorem.paragraph }
    global_notes { Faker::Boolean.boolean }
    street { Faker::Address.street_name }
    area { Faker::Address.city }
    block { Faker::Address.city }
    avenue { Faker::Address.community }
    building { Faker::Address.building_number }
  end
end
