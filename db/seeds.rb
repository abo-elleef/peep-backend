# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)
# ActiveRecord::Base.logger = Logger.new(STDOUT)
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
#                   street: "street", suburb: "suburb", city: "city", state: "state",
#                   postal_code: "postal_code", location_id: location.id
#                 })
# end
