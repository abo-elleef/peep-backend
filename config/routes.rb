Rails.application.routes.draw do
  resources :suppliers
  resources :subscriptions
  resources :discounts
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
  resources :staffs
  resources :clients
  resources :services
  resources :service_categories
  resources :appointments
  resources :product_brands
  resources :product_categories
  resources :payment_types
  resources :products
  resources :cancellation_reasons

  get "export/clients", to: "export#clients"
  post "appointments/check_hints", to: "appointments#check_hints"

  # Reports Routes
  namespace :reports do
    # sales routes
    get "sales/transaction_summary", to: "sales#transaction_summary"
    get "sales/cash_movement", to: "sales#cash_movement"
    get "sales/appointments_list", to: "sales#appointments_list"
  end

  get "invoices/build_invoices", to: "invoices#build_invoices"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
