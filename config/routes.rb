Rails.application.routes.draw do
  resources :users
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources :locations
  resources :clients
  resources :closing_shifts
  resources :shifts
  resources :staffs
  get "export/clients", to: "export#clients"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
