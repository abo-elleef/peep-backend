Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources :users, only: [:create, :update] do
    collection do
      get :whoami
    end

  end
  resources :shifts
  resources :closing_shifts
  resources :locations
  resources :staffs do
    collection do
      get :top
    end
  end
  resources :clients
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
  resources :vouchers
  resources :packages
  resources :invoices, only: [:index]

  get "export/clients", to: "export#clients"
  get "export/services", to: "export#services"
  get "export/staffs", to: "export#staffs"
  get "export/products", to: "export#products"
  get "export/orders", to: "export#orders"

  post "appointments/check_hints", to: "appointments#check_hints"

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
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
