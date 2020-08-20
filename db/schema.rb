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

ActiveRecord::Schema.define(version: 2020_08_18_215850) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.integer "status", default: 1
    t.integer "client_id"
    t.integer "location_id"
    t.text "notes"
    t.date "date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "cancellation_reason_id"
    t.index ["cancellation_reason_id"], name: "index_appointments_on_cancellation_reason_id"
    t.index ["client_id"], name: "index_appointments_on_client_id"
    t.index ["date"], name: "index_appointments_on_date"
    t.index ["location_id"], name: "index_appointments_on_location_id"
  end

  create_table "appointments_services", force: :cascade do |t|
    t.integer "appointment_id"
    t.integer "service_id"
    t.datetime "starts_at"
    t.datetime "ends_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["appointment_id"], name: "index_appointments_services_on_appointment_id"
    t.index ["service_id"], name: "index_appointments_services_on_service_id"
  end

  create_table "appointments_staffs", force: :cascade do |t|
    t.integer "appointment_id"
    t.integer "staff_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["appointment_id"], name: "index_appointments_staffs_on_appointment_id"
    t.index ["staff_id"], name: "index_appointments_staffs_on_staff_id"
  end

  create_table "blocked_times", force: :cascade do |t|
    t.integer "staff_id"
    t.datetime "starts_at"
    t.datetime "ends_at"
    t.text "reason"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "cancellation_reasons", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

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
    t.integer "location_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "street"
    t.string "area"
    t.string "block"
    t.string "avenue"
    t.string "building"
    t.index ["location_id"], name: "index_clients_on_location_id"
  end

  create_table "closing_shifts", force: :cascade do |t|
    t.datetime "starts_at"
    t.datetime "ends_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "desc"
  end

  create_table "closing_shifts_locations", force: :cascade do |t|
    t.integer "location_id"
    t.integer "closing_shift_id"
    t.index ["closing_shift_id"], name: "index_closing_shifts_locations_on_closing_shift_id"
    t.index ["location_id"], name: "index_closing_shifts_locations_on_location_id"
  end

  create_table "deductions", force: :cascade do |t|
    t.string "name"
    t.string "deduct_type"
    t.float "deduct_value"
    t.string "apply_on"
    t.integer "usage_limit"
    t.boolean "uniq_per_client", default: false
    t.datetime "starts_at"
    t.datetime "ends_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "type"
    t.float "start_value"
    t.float "current_value"
    t.index ["name"], name: "index_deductions_on_name"
  end

  create_table "invoice_sequences", force: :cascade do |t|
    t.integer "location_id"
    t.string "num_prefix"
    t.integer "next_num"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "lines", force: :cascade do |t|
    t.integer "appointment_id"
    t.integer "staff_id"
    t.integer "service_id"
    t.float "price"
    t.float "original_price"
    t.string "staff_name"
    t.string "service_name"
    t.datetime "starts_at"
    t.datetime "ends_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "price_name"
    t.integer "price_id"
    t.integer "client_id"
    t.integer "service_price_id"
    t.index ["appointment_id"], name: "index_lines_on_appointment_id"
    t.index ["client_id"], name: "index_lines_on_client_id"
    t.index ["price_id"], name: "index_lines_on_price_id"
    t.index ["service_id"], name: "index_lines_on_service_id"
    t.index ["staff_id"], name: "index_lines_on_staff_id"
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
    t.integer "user_id"
    t.index ["user_id"], name: "index_locations_on_user_id"
  end

  create_table "locations_services", force: :cascade do |t|
    t.integer "service_id"
    t.integer "location_id"
    t.index ["location_id"], name: "index_locations_services_on_location_id"
    t.index ["service_id"], name: "index_locations_services_on_service_id"
  end

  create_table "locations_staffs", force: :cascade do |t|
    t.integer "location_id"
    t.integer "staff_id"
    t.index ["location_id"], name: "index_locations_staffs_on_location_id"
    t.index ["staff_id"], name: "index_locations_staffs_on_staff_id"
  end

  create_table "payment_types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "payments", force: :cascade do |t|
    t.integer "appointment_id"
    t.integer "payment_type_id"
    t.float "amount"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["appointment_id"], name: "index_payments_on_appointment_id"
    t.index ["payment_type_id"], name: "index_payments_on_payment_type_id"
  end

  create_table "product_brands", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_product_brands_on_name"
  end

  create_table "product_categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_product_categories_on_name"
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.integer "product_category_id"
    t.integer "product_brand_id"
    t.string "barcode"
    t.string "sku"
    t.text "description"
    t.float "retail_price"
    t.float "special_price"
    t.float "supply_price"
    t.integer "initial_stock"
    t.integer "reorder_point"
    t.integer "reorder_quantity"
    t.boolean "enable_commission"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "supplier_id"
    t.index ["barcode"], name: "index_products_on_barcode"
    t.index ["name"], name: "index_products_on_name"
    t.index ["product_brand_id"], name: "index_products_on_product_brand_id"
    t.index ["product_category_id"], name: "index_products_on_product_category_id"
    t.index ["sku"], name: "index_products_on_sku"
    t.index ["supplier_id"], name: "index_products_on_supplier_id"
  end

  create_table "service_categories", force: :cascade do |t|
    t.string "name"
    t.string "appointment_color"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "service_prices", force: :cascade do |t|
    t.integer "service_id"
    t.string "name"
    t.integer "duration"
    t.integer "pricing_type"
    t.float "price", default: 0.0
    t.float "special_price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["service_id"], name: "index_service_prices_on_service_id"
  end

  create_table "services", force: :cascade do |t|
    t.string "name"
    t.integer "treatment_type_id"
    t.text "description"
    t.integer "available_for"
    t.boolean "staff_commission"
    t.boolean "extra_time"
    t.integer "extra_time_type"
    t.integer "extra_time_duration"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "service_category_id"
    t.index ["service_category_id"], name: "index_services_on_service_category_id"
  end

  create_table "services_staffs", id: false, force: :cascade do |t|
    t.bigint "service_id", null: false
    t.bigint "staff_id", null: false
    t.index ["service_id", "staff_id"], name: "index_services_staffs_on_service_id_and_staff_id"
    t.index ["staff_id", "service_id"], name: "index_services_staffs_on_staff_id_and_service_id"
  end

  create_table "shifts", force: :cascade do |t|
    t.bigint "staff_id"
    t.bigint "location_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.datetime "starts_at"
    t.datetime "ends_at"
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
    t.float "product_comm", default: 0.0
    t.float "discount_comm", default: 0.0
    t.float "service_comm", default: 0.0
  end

  create_table "subscriptions", force: :cascade do |t|
    t.string "name"
    t.text "desc"
    t.datetime "starts_at"
    t.integer "available_for", default: 0
    t.datetime "ends_at"
    t.string "pricing_type"
    t.float "pricing_value"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "suppliers", force: :cascade do |t|
    t.string "name"
    t.text "desc"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "phone"
    t.string "website"
    t.string "area"
    t.string "block"
    t.string "avenue"
    t.string "building"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_suppliers_on_name"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.string "company_name"
    t.integer "business_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
