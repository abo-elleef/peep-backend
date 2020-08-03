FactoryBot.define do
  factory :staff do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    phone { Faker::PhoneNumber.cell_phone }
    email { Faker::Internet.email }
    booking_enabled { true }
    booking_color {"#ffff00"}
    title {Faker::Name.name}
    notes {Faker::Name.name}
    contract_start {Time.zone.now}
    contract_end {Time.zone.now + 1.year}
  end
end
