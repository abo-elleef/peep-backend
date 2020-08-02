FactoryBot.define do
  factory :service do
    name { Faker::Name.unique.name }
    description { Faker::Lorem.paragraph(sentence_count: 4) }
    online_booking { Faker::Boolean.boolean }
    staff_commission { Faker::Boolean.boolean }
    available { Faker::Boolean.boolean }
    type { 'processing time after' }
    duration { '5 min' }
    available_for { Service.available_fors.values.sample }
  end
end
