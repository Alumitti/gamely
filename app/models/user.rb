class User < ApplicationRecord
    has_many :favourite_games
    has_many :wishlist_games
    has_secure_password
    has_many :favourites, through: :favourite_games, source: :game
    has_many :wishlists, through: :wishlist_games, source: :game

    validates :username, presence: true
end
