# # # This file should contain all the record creation needed to seed the database with its default values.
# # # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# # #
# # # Examples:
# # #
# # #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# # #   Character.create(name: 'Luke', movie: movies.first)
# # ActiveRecord::Base.logger = Logger.new(STDOUT)
user = User.create({
                     first_name: 'test user',
                     last_name: 'last test user '

                   })
location = Location.create!({
                             name: "first location", business_type: 1, phone: '01003809143',
                             email: 'email@email.com', street: 'street', building: '45',
                             city: 'cairo', state: 'cairo', zipcode: '123456789', user_id: user.id

                })
location2 = Location.create!({
                                name: "second location", business_type: 1, phone: '01003809143',
                                email: 'email@email.com', street: 'street', building: '45',
                                city: 'cairo', state: 'cairo', zipcode: '123456789', user_id: user.id

                            })
locations = Location.all
50.times do |index|
  Staff.create!({
                 first_name: "#{index} first_name", last_name: " #{index} last_name",
                 phone: "01003809143", email: "email@gmail.com", booking_enabled: true,
                 booking_color: "#ff0012", title: "title", notes: "notes",
                 contract_start: Time.zone.now - 1.year, contract_end: Time.zone.now + 1.year,
               })
  Client.create!({
                  first_name: "#{index} first_name", last_name: " #{index} last_name",
                  phone: "phone", email: "email@email.com", notify_method: "email", language: "en",
                  gender: 1, birthday: Time.zone.now - 10.years, notes: "notes", global_notes: true,
                  street: "street", area: "area", block: "block", avenue: "avenue",
                  building: "building", location_id: index.even? ? location.id : location2.id
                })
end

5.times do |index|
  service_category = ServiceCategory.create!({
                              name: "category_#{index} ", description: "description", appointment_color: "appointment_color"
                          })
  10.times do |service_index|
    service = Service.create!({
                        name: "#{service_index}_service_name", description: "description", staff_commission: true,
                        available_for: 0, service_category_id: service_category.id
                    })
    3.times do |price_index|
      ServicePrice.create({
                              service_id: service.id,
                              name: "price name #{price_index}",
                              duration: (100..500).to_a.sample,
                              pricing_type: [1,2,3].sample,
                              price: (100..500).to_a.sample,
                          })
    end
  end
end

clients = Client.all;
services = Service.all;
service_prices = ServicePrice.all;
staffs = Staff.all;
days = []
6.times do |index|
  days << Date.today - index.day
end

100.times do |index|
  appointment = Appointment.create!({
                                        client_id: clients.sample.id,
                                        location_id: locations.sample.id,
                                        notes: " notes for appointment #{index}",
                                        date: days.sample
                                    })
  3.times do
    service_price = service_prices.sample
    staff = staffs.sample
    AppointmentService.create!({
                                   appointment_id: appointment.id,
                                   service_price_id: service_price.id,
                                   staff_id: staff.id,
                                   starts_at: Time.zone.now,
                                   ends_at: Time.zone.now + 1.hour
                               })
  end
end

# =================== create Inventory brand and category sample data  ====================
55.times do |index|
  ProductBrand.create({
                           name: "#{index} Brand"
                         })
  ProductCategory.create({
                           name: "#{index} category"
                         })
end
# =================== create VoucherType sample data ====================
40.times do |index|
  time = Time.zone.now  - (index * 5 + index).day
  VoucherType.create!({name: "Voucher #{index + 20 }", price: 200, sales_amount: 300, sold_amount: 23, value: index * 10 + 3, title: "voucher title", desc: "voucher desc", notes: "notes", color: "#f0f0f0", starts_at: time , ends_at: time + 10.days})
end
# =================== create Subscription sample data ====================
service_prices = ServicePrice.all;
40.times do |index|
  time = Time.zone.now  - (index * 5 + index).day
  sub = Subscription.create!({name: "sub plan #{index + 1  }",
                       desc: index.even? ? "even desc" : "odd desc ",
                       pricing_value: index * 10 + 3,
                       pricing_type: index.even? ? "percentage" : "value",
                       available_for: 0,
                       starts_at: time ,
                       ends_at: time + 10.days
                      })
  sub.service_price_ids = service_prices.sample(3).map(&:id)
end
# =================== create Discount sample data ====================
40.times do |index|
  time = Time.zone.now  - (index * 5 + index).day
  Discount.create!({
                       name: "dicount #{index + 20 }",
                       deduct_type: index.even? ? "value" : "percentage",
                       deduct_value: index * 10 + 3,
                       apply_on: "services",
                       limit: 100,
                       uniq_per_client: index.even?,
                       starts_at: time ,
                       ends_at: time + 10.days
                   })
end
# =================== create Package sample data ====================
40.times do |index|
  price = (100..500).to_a.sample
  final_price = price - ( index / 100.0 * price)
  package = Package.new({name: "Package name #{index}", description: "Package description #{index}", available_for: :everyone, pricing_type: :percentage, deduction_amount: index, final_price: final_price, schedule_type: :sequence})
  package.service_price_ids = service_prices.sample(2).pluck(:id)
  package.save!
end

# =================== Inventory Supplier data ====================
100.times do |index|
  Supplier.create!({
                       name: "name #{index}",
                       desc: "desc #{index}",
                       first_name: "first_name #{index}",
                       last_name: "last_name #{index}",
                       email: "email #{index}",
                       phone: "phone #{index}",
                       website: "website #{index}",
                       area: "area #{index}",
                       block: "block #{index}",
                       avenue: "avenue #{index}",
                       building: "building #{index}",
                   })
end
# =================== create Product sample data ====================
brands = ProductBrand.all;
categories = ProductCategory.all;
suppliers = Supplier.all;
100.times do |index|
  Product.create!({
                      name: "name #{index}",
                      product_category_id: categories.sample.id,
                      product_brand_id: brands.sample.id,
                      barcode: "barcode #{index}",
                      sku: "sku #{index}",
                      description: "desc #{index}",
                      retail_price: (1..100).to_a.sample,
                      special_price: (1..100).to_a.sample,
                      supply_price: (1..100).to_a.sample,
                      enable_commission: true,
                      supplier_id: suppliers.sample.id
                  })
end
#
# =================== create orders sample data ====================
products = Product.all;
suppliers = Supplier.all;
locations = Location.all;
staffs =  Staff.all;

100.times do |index|
  order = Order.create!({
                            status: 1,
                            location_id: locations.sample.id,
                            supplier_id: suppliers.sample.id,
                            staff_id: staffs.sample.id
                        })
  items = []
  [3, 4, 5, 6].sample.times do |item_index|
    product = products.sample
    request = [20, 24, 35, 65, 78, 81].sample
    items << Item.create!({
                    order_id: order.id,
                    product_id: product.id,
                    received_price: product.retail_price,
                    received_quantity: request,
                    requested_quantity: item_index.even? ? request : (request * 0.8).ceil ,
                    requested_price: product.retail_price
                })

  end
  order.items = items
  order.update({total_cost: items.map(&:product).flatten.map(&:retail_price).flatten.sum})

end


# =================== create invoices sample data ====================
locations = Location.all;
sellables = [Product.all, ServicePrice.all].flatten.shuffle;
staffs = Staff.all;
clients = Client.all;
100.times do
  location_id = locations.sample.id
  sellable_attributes = []
  (3..7).to_a.sample.times do |index|
    staff = staffs.sample
    sellable = sellables.sample
    sellable_attributes << {
        staff_id: staff.id,
        staff_name: staff.name,
        unit_price: (100..200).to_a.sample,
        original_unit_price: (100..200).to_a.sample,
        sellable_name: sellable.name,
        sellable_type: sellable.class.name,
        sellable_id: sellable.id
    }
  end
  Invoice.create!(
      {
          sequence: Invoice.next_sequence(location_id),
          status: [1,2,3,4].sample,
          notes: "great work",
          client_id: clients.sample.id,
          location_id: location_id,
          sub_total: (100..500).to_a.sample,
          total: (100..500).to_a.sample,
          balance: (100..500).to_a.sample,
          lines_attributes: sellable_attributes
      }
  )
end


# =================== create invoices sample data ====================
discounts = Discount.all;
lines = Line.all
100.times do
  DiscountUsage.create!({line_id: lines.sample.id, discount_id: discounts.sample.id})
end

# =================== create invoices sample data ====================
discounts = VoucherType.all;
lines = Line.all
100.times do
  VoucherUsage.create!({line_id: lines.sample.id, voucher_id: discounts.sample.id})
end