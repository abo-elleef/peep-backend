FactoryBot.define do
  factory :staff do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    phone { Faker::PhoneNumber.cell_phone }
    email { Faker::Internet.email }
    booking_enabled { Faker::Boolean.boolean }
    booking_color { Faker::Color.hex_color }
    title { Faker::Job.title }
    notes { Faker::Lorem.paragraph(sentence_count: 2) }
    contract_start { Time.zone.now - 10.days }
    contract_end { Time.zone.now + 12.months }
  end
end
