FactoryBot.define do
  factory :location do
    name {Faker::Name.name}
    business_type { 1 }
    phone {Faker::PhoneNumber.phone_number}
    email { Faker::Internet.email}
    street { Faker::Address.street_name }
    building {Faker::Address.building_number}
    city {Faker::Address.city}
    state {Faker::Address.state}
    zipcode {Faker::Address.zip_code}
  end
end
