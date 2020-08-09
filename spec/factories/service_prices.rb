FactoryBot.define do
  factory :service_price do
    name { "MyString" }
    duration { "MyString" }
    type { 1 }
    price { 1.5 }
    special_price { 1.5 }

    service
  end
end
