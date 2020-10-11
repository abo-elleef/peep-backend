FactoryBot.define do
  factory :location do
    name {Faker::Name.name}
    business_type { 1 }
    phone {Faker::PhoneNumber.phone_number}
    email { Faker::Internet.email}
    street { Faker::Address.street_name }
    building {Faker::Address.building_number}
    area {Faker::Address.city}
    avenue {Faker::Address.state}
    block {Faker::Address.zip_code}
  end
end
