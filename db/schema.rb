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

ActiveRecord::Schema.define(version: 2021_12_20_172642) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "appointment_services", force: :cascade do |t|
    t.integer "appointment_id"
    t.datetime "starts_at"
    t.datetime "ends_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "staff_id"
    t.integer "service_price_id"
    t.index ["appointment_id"], name: "index_appointment_services_on_appointment_id"
    t.index ["service_price_id"], name: "index_appointment_services_on_service_price_id"
  end

  create_table "appointments", force: :cascade do |t|
    t.integer "status", default: 1
    t.integer "client_id"
    t.text "notes"
    t.date "date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "location_id"
    t.integer "cancellation_reason_id"
    t.integer "invoice_id"
    t.integer "user_id"
    t.index ["cancellation_reason_id"], name: "index_appointments_on_cancellation_reason_id"
    t.index ["client_id"], name: "index_appointments_on_client_id"
    t.index ["date"], name: "index_appointments_on_date"
    t.index ["location_id"], name: "index_appointments_on_location_id"
    t.index ["user_id"], name: "index_appointments_on_user_id"
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
    t.integer "user_id"
    t.index ["user_id"], name: "index_cancellation_reasons_on_user_id"
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
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "street"
    t.string "area"
    t.string "block"
    t.string "avenue"
    t.string "building"
    t.integer "user_id"
    t.index ["user_id"], name: "index_clients_on_user_id"
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

  create_table "discount_usages", force: :cascade do |t|
    t.integer "line_id"
    t.integer "discount_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["discount_id"], name: "index_discount_usages_on_discount_id"
    t.index ["line_id"], name: "index_discount_usages_on_line_id"
  end

  create_table "discounts", force: :cascade do |t|
    t.string "name"
    t.string "deduct_type"
    t.float "deduct_value"
    t.string "apply_on"
    t.boolean "uniq_per_client", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "active"
    t.integer "limit", default: 1
    t.datetime "starts_at"
    t.datetime "ends_at"
    t.integer "user_id"
    t.index ["name"], name: "index_discounts_on_name"
    t.index ["user_id"], name: "index_discounts_on_user_id"
  end

  create_table "discounts_service_prices", force: :cascade do |t|
    t.integer "discount_id"
    t.integer "service_price_id"
    t.index ["discount_id"], name: "index_discounts_service_prices_on_discount_id"
    t.index ["service_price_id"], name: "index_discounts_service_prices_on_service_price_id"
  end

  create_table "invoices", force: :cascade do |t|
    t.string "sequence"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "status"
    t.text "notes"
    t.integer "client_id"
    t.integer "location_id"
    t.float "sub_total"
    t.float "total"
    t.float "balance"
    t.integer "user_id"
    t.index ["client_id"], name: "index_invoices_on_client_id"
    t.index ["location_id"], name: "index_invoices_on_location_id"
    t.index ["status"], name: "index_invoices_on_status"
    t.index ["user_id"], name: "index_invoices_on_user_id"
  end

  create_table "items", force: :cascade do |t|
    t.integer "order_id"
    t.float "received_price"
    t.float "received_quantity"
    t.float "requested_quantity"
    t.float "requested_price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "product_id"
    t.index ["order_id"], name: "index_items_on_order_id"
    t.index ["product_id"], name: "index_items_on_product_id"
  end

  create_table "lines", force: :cascade do |t|
    t.integer "staff_id"
    t.float "unit_price"
    t.float "original_unit_price"
    t.string "staff_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "sellable_name"
    t.string "sellable_type"
    t.integer "sellable_id"
    t.integer "quantity", default: 1
    t.integer "invoice_id"
    t.datetime "starts_at"
    t.datetime "ends_at"
    t.index ["staff_id"], name: "index_lines_on_staff_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "name"
    t.integer "business_type"
    t.string "phone"
    t.string "email"
    t.string "street"
    t.string "building"
    t.string "area"
    t.string "block"
    t.string "avenue"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
    t.string "num_prefix"
    t.integer "next_num"
    t.integer "available_for", default: 0
    t.text "about"
    t.index ["user_id"], name: "index_locations_on_user_id"
  end

  create_table "locations_products", force: :cascade do |t|
    t.integer "location_id"
    t.integer "product_id"
    t.float "initial_stock"
    t.float "reorder_point"
    t.float "reorder_quantity"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["location_id"], name: "index_locations_products_on_location_id"
    t.index ["product_id"], name: "index_locations_products_on_product_id"
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

  create_table "orders", force: :cascade do |t|
    t.integer "status"
    t.float "total_cost"
    t.integer "supplier_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "location_id"
    t.integer "staff_id"
    t.index ["location_id"], name: "index_orders_on_location_id"
    t.index ["staff_id"], name: "index_orders_on_staff_id"
    t.index ["supplier_id"], name: "index_orders_on_supplier_id"
  end

  create_table "packages", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.integer "available_for"
    t.integer "pricing_type"
    t.float "deduction_amount"
    t.float "final_price"
    t.integer "schedule_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "packages_service_prices", id: false, force: :cascade do |t|
    t.bigint "package_id", null: false
    t.bigint "service_price_id", null: false
    t.index ["package_id"], name: "index_packages_service_prices_on_package_id"
    t.index ["service_price_id"], name: "index_packages_service_prices_on_service_price_id"
  end

  create_table "payment_types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
    t.index ["user_id"], name: "index_payment_types_on_user_id"
  end

  create_table "payments", force: :cascade do |t|
    t.integer "payment_type_id"
    t.float "amount"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "invoice_id"
    t.index ["payment_type_id"], name: "index_payments_on_payment_type_id"
  end

  create_table "plans", force: :cascade do |t|
    t.integer "staffs_num"
    t.integer "locations_num"
    t.boolean "emails"
    t.boolean "sms"
    t.boolean "subscriptions"
    t.boolean "analytics"
    t.boolean "inventory"
    t.boolean "languages"
    t.boolean "permissions_config"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
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
    t.boolean "enable_commission"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "supplier_id"
    t.boolean "retail", default: true
    t.boolean "stock_control", default: true
    t.index ["barcode"], name: "index_products_on_barcode"
    t.index ["name"], name: "index_products_on_name"
    t.index ["product_brand_id"], name: "index_products_on_product_brand_id"
    t.index ["product_category_id"], name: "index_products_on_product_category_id"
    t.index ["sku"], name: "index_products_on_sku"
    t.index ["supplier_id"], name: "index_products_on_supplier_id"
  end

  create_table "roles", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "roles_users", id: false, force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "role_id", null: false
    t.index ["role_id"], name: "index_roles_users_on_role_id"
    t.index ["user_id"], name: "index_roles_users_on_user_id"
  end

  create_table "service_categories", force: :cascade do |t|
    t.string "name"
    t.string "appointment_color"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
    t.index ["user_id"], name: "index_service_categories_on_user_id"
  end

  create_table "service_prices", force: :cascade do |t|
    t.integer "service_id"
    t.string "name"
    t.integer "duration"
    t.integer "pricing_type"
    t.float "price", default: 0.0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
    t.index ["service_id"], name: "index_service_prices_on_service_id"
    t.index ["user_id"], name: "index_service_prices_on_user_id"
  end

  create_table "service_prices_subscriptions", force: :cascade do |t|
    t.integer "subscription_id"
    t.integer "service_price_id"
    t.index ["service_price_id"], name: "index_service_prices_subscriptions_on_service_price_id"
    t.index ["subscription_id"], name: "index_service_prices_subscriptions_on_subscription_id"
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
    t.integer "user_id"
    t.index ["service_category_id"], name: "index_services_on_service_category_id"
    t.index ["user_id"], name: "index_services_on_user_id"
  end

  create_table "services_staffs", id: false, force: :cascade do |t|
    t.bigint "service_id", null: false
    t.bigint "staff_id", null: false
    t.index ["service_id", "staff_id"], name: "index_services_staffs_on_service_id_and_staff_id"
    t.index ["staff_id", "service_id"], name: "index_services_staffs_on_staff_id_and_service_id"
  end

  create_table "services_voucher_types", id: false, force: :cascade do |t|
    t.bigint "voucher_type_id", null: false
    t.bigint "service_id", null: false
    t.index ["service_id"], name: "index_services_voucher_types_on_service_id"
    t.index ["voucher_type_id"], name: "index_services_voucher_types_on_voucher_type_id"
  end

  create_table "shifts", force: :cascade do |t|
    t.bigint "staff_id"
    t.bigint "location_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.datetime "starts_at"
    t.datetime "ends_at"
    t.string "repeat"
    t.integer "parent_id"
    t.date "repeat_ends_at"
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
    t.string "avatar"
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
    t.integer "limit", default: 1
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
    t.string "street"
    t.index ["name"], name: "index_suppliers_on_name"
  end

  create_table "tips", force: :cascade do |t|
    t.integer "staff_id"
    t.float "value"
    t.integer "invoice_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["staff_id"], name: "index_tips_on_staff_id"
  end

  create_table "user_plans", force: :cascade do |t|
    t.integer "user_id"
    t.integer "plan_id"
    t.integer "staffs_num"
    t.integer "locations_num"
    t.boolean "emails"
    t.boolean "sms"
    t.boolean "subscriptions"
    t.boolean "analytics"
    t.boolean "inventory"
    t.boolean "languages"
    t.boolean "permissions_config"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "company_name"
    t.integer "business_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "voucher_types", force: :cascade do |t|
    t.string "name"
    t.float "value"
    t.float "price"
    t.integer "sales_amount"
    t.integer "sold_amount", default: 0
    t.boolean "expire", default: false
    t.integer "expiring_reason"
    t.string "title"
    t.text "desc"
    t.text "notes"
    t.string "color"
    t.datetime "starts_at"
    t.datetime "ends_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "voucher_usages", force: :cascade do |t|
    t.integer "voucher_id"
    t.integer "client_id"
    t.integer "usable_id"
    t.string "usable_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["client_id"], name: "index_voucher_usages_on_client_id"
    t.index ["usable_id"], name: "index_voucher_usages_on_usable_id"
    t.index ["usable_type"], name: "index_voucher_usages_on_usable_type"
    t.index ["voucher_id"], name: "index_voucher_usages_on_voucher_id"
  end

  create_table "vouchers", force: :cascade do |t|
    t.integer "voucher_type_id"
    t.string "code"
    t.float "current_value"
    t.boolean "expire"
    t.integer "expiring_reason"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "invoice_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
