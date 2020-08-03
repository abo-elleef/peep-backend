FactoryBot.define do
  factory :user do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    email { Faker::Internet.email }
    password_digest { Faker::Internet.password }
    company_name { Faker::Company.name }
  end
end
