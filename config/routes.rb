Rails.application.routes.draw do
  resources :closing_shifts
  resources :shifts
  resources :staffs
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
