Rails.application.routes.draw do
  get '/search' => 'pages#search'

  root 'flights#index'

  resources :users
  resources :reservations
  resources :flights
  resources :airplanes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
