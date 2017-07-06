Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root "home#index"
get "/creatures", to: "creatures#index", as: "creatures"
get "/creatures/:id", to: "creatures#show", as: "creature"
post "creatures", to: "creatures#create"
put "creatures/:id", to: "creatures#update"
delete "creatures/:id", to: "creatures#delete"

end
