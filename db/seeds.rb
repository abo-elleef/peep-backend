# # # This file should contain all the record creation needed to seed the database with its default values.
# # # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# # #
# # # Examples:
# # #
# # #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# # #   Character.create(name: 'Luke', movie: movies.first)
# # ActiveRecord::Base.logger = Logger.new(STDOUT)
# user = User.create({
#                      first_name: 'test user',
#                      last_name: 'last test user '
#
#                    })
# location = Location.create!({
#                              name: "first location", business_type: 1, phone: '01003809143',
#                              email: 'email@email.com', street: 'street', building: '45',
#                              city: 'cairo', state: 'cairo', zipcode: '123456789', user_id: user.id
#
#                 })
# 30.times do |index|
#   Staff.create!({
#                  first_name: "#{index} first_name", last_name: " #{index} last_name",
#                  phone: "01003809143", email: "email@gmail.com", booking_enabled: true,
#                  booking_color: "#ff0012", title: "title", notes: "notes",
#                  contract_start: Time.zone.now - 1.year, contract_end: Time.zone.now + 1.year,
#                })
#   Client.create!({
#                   first_name: "#{index} first_name", last_name: " #{index} last_name",
#                   phone: "phone", email: "email@email.com", notify_method: "email", language: "en",
#                   gender: 1, birthday: Time.zone.now - 10.years, notes: "notes", global_notes: true,
#                   street: "street", area: "area", block: "block", avenue: "avenue",
#                   building: "building", location_id: location.id
#                 })
# end
#
# 5.times do |index|
#   service_category = ServiceCategory.create!({
#                               name: "category_#{index} ", description: "description", appointment_color: "appointment_color"
#                           })
#   10.times do |service_index|
#     Service.create!({
#                         name: "#{service_index}_service_name", description: "description", staff_commission: true,
#                         available_for: 0, service_category_id: service_category.id
#                     })
#   end
# end
#
# clients = Client.all
# services = Service.all
# staffs = Staff.all
# days = []
# 6.times do |index|
#   days << Date.today - index.day
# end
# (100000).times do |index|
#   appointment = Appointment.create!({
#                                       notes: " notes for appointment #{index + 23377}",
#                                       date: days.sample
#                                     })
#   3.times do
#     service = services.sample
#     staff = staffs.sample
#     price = (1..100).to_a.sample
#     Line.create!({
#                    appointment_id: appointment.id,
#                    service_id: service.id,
#                    staff_id: staff.id,
#                    price: price,
#                    original_price: price * 1.2,
#                    staff_name: staff.first_name,
#                    service_name: service.name,
#                    starts_at: Time.zone.now,
#                    ends_at: Time.zone.now + 1.hour
#                  })
#   end
# end
# 55.times do |index|
#   ProductBrand.create({
#                            name: "#{index} Brand"
#                          })
#   ProductCategory.create({
#                            name: "#{index} category"
#                          })
# end
#
#
# service_prices = ServicePrice.all
# 40.times do |index|
#   price = (100..500).to_a.sample
#   final_price = price - ( index / 100.0 * price)
#   time = Time.zone.now  - (index * 5 + index).day
#   Voucher.create({name: "dicount #{index + 20 }", deduct_type: index.even? ? "value" : "percentage", deduct_value: index * 10 + 3, apply_on: "services", usage_limit: 100, uniq_per_client: false, starts_at: time , ends_at: time + 10.days})
#   Discount.create({name: "dicount #{index + 20 }", deduct_type: index.even? ? "value" : "percentage", deduct_value: index * 10 + 3, apply_on: "services", usage_limit: 100, uniq_per_client: false, starts_at: time , ends_at: time + 10.days})
#   Package.create!({name: "Package name #{index}", description: "Package description #{index}", available_for: :everyone, pricing_type: :percentage, deduction_amount: index, final_price: final_price, schedule_type: :sequence,service_price_ids: service_prices.sample(2).pluck(:id) })
# end
# 40.times do |index|
#   time = Time.zone.now  - (index * 5 + index).day
#   Subscription.create({name: "sub plan #{index + 1  }",
#                        desc: index.even? ? "even desc" : "odd desc ",
#                        pricing_value: index * 10 + 3,
#                        pricing_type: index.even? ? "percentage" : "value",
#                        available_for: 0,
#                        starts_at: time ,
#                        ends_at: time + 10.days
#                       })
#   end
# 100.times do |index|
#   Supplier.create!({
#                        name: "name #{index}",
#                        desc: "desc #{index}",
#                        first_name: "first_name #{index}",
#                        last_name: "last_name #{index}",
#                        email: "email #{index}",
#                        phone: "phone #{index}",
#                        website: "website #{index}",
#                        area: "area #{index}",
#                        block: "block #{index}",
#                        avenue: "avenue #{index}",
#                        building: "building #{index}",
#                    })
# end
#
# brands = ProductBrand.all
# categories = ProductCategory.all
# suppliers = Supplier.all
# 100.times do |index|
#   Product.create!({
#                       name: "name #{index}",
#                       product_category_id: categories.sample.id,
#                       product_brand_id: brands.sample.id,
#                       barcode: "barcode #{index}",
#                       sku: "sku #{index}",
#                       description: "desc #{index}",
#                       retail_price: (1..100).to_a.sample,
#                       special_price: (1..100).to_a.sample,
#                       supply_price: (1..100).to_a.sample,
#                       initial_stock: (1..100).to_a.sample,
#                       reorder_point: (1..100).to_a.sample,
#                       reorder_quantity: (1..100).to_a.sample,
#                       enable_commission: true,
#                       supplier_id: suppliers.sample.id
#                   })
# end
#
# =================== create orders sample data ====================
# products = Product.all
# suppliers = Supplier.all
# locations = Location.all
# staffs =  Staff.all
#
# 100.times do |index|
#   order = Order.create!({
#                             status: 1,
#                             location_id: locations.sample.id,
#                             supplier_id: suppliers.sample.id,
#                             staff_id: staffs.sample.id
#                         })
#   items = []
#   [3, 4, 5, 6].sample.times do |item_index|
#     product = products.sample
#     request = [20, 24, 35, 65, 78, 81].sample
#     items << Item.create!({
#                     order_id: order.id,
#                     product_id: product.id,
#                     received_price: product.retail_price,
#                     received_quantity: request,
#                     requested_quantity: item_index.even? ? request : (request * 0.8).ceil ,
#                     requested_price: product.retail_price
#                 })
#
#   end
#   order.items = items
#   order.update({total_cost: items.map(&:product).flatten.map(&:retail_price).flatten.sum})
#
# end
# ========== create service prices =================================================================
# services = Service.all;
# 200.times do |index|
#   ServicePrice.create!({
#                           service_id: services.sample.id,
#                           price: rand(10..100),
#                           name: " price #{index}",
#                           duration: rand(60..120),
#                           pricing_type: rand(1..3)
#                       })
# end
# ========== create Appointments with lines  =======================================================
# start_date = Date.new(2020, 8, 15);
# hours = (6..18).to_a;
# days = [];
# staffs = Staff.all;
# clients = Client.all;
# locations = Location.all;
# prices = ServicePrice.all
# 21.times {|index| days << start_date + index.day };
# 1000.times do |appointment_index|
#   location = locations.sample
#   staff = staffs.sample
#   client = clients.sample
#   service_price = prices.sample
#   day = days.sample
#   time = day + hours.sample.hour
#   lines = []
#   rand(1..3).times do |index|
#     start_time = time + rand(1..3).hour
#     end_time = start_time + rand(60..120).minute
#     lines << {
#         staff_id: staff.id,
#         client_id: client.id,
#         price: service_price.price * 0.8,
#         starts_at: start_time,
#         ends_at: end_time,
#         original_price: service_price.price,
#         staff_name: staff.name,
#         service_name: service_price.service.name,
#         service_id: service_price.service.id,
#         sellable_id: service_price.id,
#         sellable_type: "ServicePrice",
#         sellable_name: service_price.name.presence || "blank price name ",
#         created_at: time,
#         updated_at: time
#     }
#   end
#   Appointment.create!({
#                           status: rand(1...6),
#                           client_id: client.id,
#                           location_id: location.id,
#                           notes: " #{appointment_index}-- long appointment notes",
#                           date: day,
#                           created_at: time,
#                           updated_at: time,
#                           lines_attributes: lines
#                       })
# end
