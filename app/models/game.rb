class Game < ApplicationRecord
    has_many :favourite_games
    has_many :wishlist_games
end
