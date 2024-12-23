FactoryBot.define do
  factory :user do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    email { Faker::Internet.email }
    company_name { Faker::Company.name }
    password { Faker::Internet.password }
  end
end

