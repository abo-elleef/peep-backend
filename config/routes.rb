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
  resources :staffs
  resources :clients
  resources :services
  resources :service_categories
  resources :appointments
  resources :product_brands
  resources :product_categories
  get "export/clients", to: "export#clients"
  post "appointments/check_hints", to: "appointments#check_hints"
  # Reports Routes

  namespace :reports do
    get "sales/daily_sales", to: "sales#daily_sales"
    get "sales/appointments_list", to: "sales#appointments_list"
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
