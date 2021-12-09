Rails.application.routes.draw do
  resources :games
  resources :wishlist_games
  resources :favourite_games
  resources :users
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/myfavourites', to: 'users#myfavouritegames'
  get '/mywishlists', to: 'users#mywishlistsgames'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
