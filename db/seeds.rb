# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Staff.create(
  first_name: "first_name",
  last_name: "last_name",
  phone: "01003809143",
  email: "email@gmail.com",
  booking_enabled: true,
  booking_color: "#ff0012",
  title: "title",
  notes: "notes",
  contract_start: Time.zone.now - 1.year,
  contract_end: Time.zone.now + 1.year
)