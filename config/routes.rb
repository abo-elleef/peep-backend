Rails.application.routes.draw do
  # mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources :users, only: [:create, :update, :show]
  resources :locations
  resources :closing_shifts
  resources :shifts
  resources :staffs
  resources :clients
  get "export/clients", to: "export#clients"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
