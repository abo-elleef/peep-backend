Rails.application.routes.draw do

  post '/auth/login', to: 'authentication#login'
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources :users, only: [:create, :update]  do
    collection do
      get :whoami
    end

  end
  resources :shifts
  resources :blocked_times
  resources :closing_shifts
  resources :locations
  resources :invoice_sequences
  resources :staffs do
    collection do
      get :top
    end
  end
  resources :service_prices, only: :index
  resources :clients do
    member do
      get :appointments
      get :vouchers
      get :subscriptions
      get :products
      get :invoices
      get :client_sales
    end
  end
  resources :services do
    collection do
      get :top
    end
  end
  resources :service_categories
  resources :appointments
  resources :orders
  resources :product_brands
  resources :product_categories
  resources :payment_types
  resources :products do
    member do
      get :stock_history
    end
  end
  resources :cancellation_reasons
  resources :suppliers
  resources :subscriptions
  resources :discounts
  resources :voucher_types
  resources :packages
  resources :invoices, only: [:index, :show, :update]

  get "export/clients", to: "export#clients"
  get "export/services", to: "export#services"
  get "export/staffs", to: "export#staffs"
  get "export/products", to: "export#products"
  get "export/orders", to: "export#orders"
  post "appointments/check_hints", to: "appointments#check_hints"
  post "/checkout", to: "invoices#checkout"
  # Reports Routes
  namespace :reports do
    # sales routes
    get "sales/transaction_summary", to: "sales#transaction_summary"
    get "sales/cash_movement", to: "sales#cash_movement"
    get "sales/appointments_list", to: "sales#appointments_list"
    get "sales/sales_by_product", to: "sales#sales_by_product"
    get "sales/sales_by_service", to: "sales#sales_by_service"
    get "sales/sales_by_location", to: "sales#sales_by_location"
    get "sales/sales_by_client", to: "sales#sales_by_client"
    get "sales/sales_by_staff", to: "sales#sales_by_staff"
    get "sales/recent_sales", to: "sales#recent_sales"
    get "sales/appointments", to: "sales#appointments"
    get "sales/vouchers", to: "sales#vouchers"

    get "dashboard/total_appointments", to: "dashboard#total_appointments"
    get "dashboard/total_sales", to: "dashboard#total_sales"
    get "dashboard/average_sales", to: "dashboard#average_sales"
    get "dashboard/total_appointments_graph", to: "dashboard#total_appointments_graph"
    get "dashboard/total_sales_graph", to: "dashboard#total_sales_graph"
  end
  post 'password/forgot', to: 'passwords#forgot'
  post 'password/reset', to: 'passwords#reset', as: :reset_password
  put 'password/update', to: 'password#update'

  post "voucher_types/sell_voucher", to: "voucher_types#sell_voucher"
  post "vouchers/check_voucher_validity", to: "vouchers#check_voucher_validity"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
