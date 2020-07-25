# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_25_202907) do

  create_table "clients", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "phone"
    t.string "email"
    t.integer "notify_method"
    t.string "language"
    t.integer "gender"
    t.datetime "birthday"
    t.string "notes"
    t.boolean "global_notes"
    t.integer "location_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "street"
    t.string "suburb"
    t.string "city"
    t.string "state"
    t.string "postal_code"
    t.index ["location_id"], name: "index_clients_on_location_id"
  end

  create_table "closing_shifts", force: :cascade do |t|
    t.datetime "start_date"
    t.datetime "end_date"
    t.integer "location_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["location_id"], name: "index_closing_shifts_on_location_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "name"
    t.integer "business_type"
    t.string "phone"
    t.string "email"
    t.string "street"
    t.string "building"
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "shifts", force: :cascade do |t|
    t.integer "day"
    t.time "start_time"
    t.time "end_time"
    t.integer "staff_id"
    t.integer "location_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["location_id"], name: "index_shifts_on_location_id"
    t.index ["staff_id"], name: "index_shifts_on_staff_id"
  end

  create_table "staffs", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "phone"
    t.string "email"
    t.boolean "booking_enabled"
    t.string "booking_color"
    t.string "title"
    t.text "notes"
    t.datetime "contract_start"
    t.datetime "contract_end"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "clients", "locations"
end
