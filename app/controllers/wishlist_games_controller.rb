class WishlistGamesController < ApplicationController
    def index
        all_games = WishlistGame.all
        render json: all_games
    end

    def show
        this_game = WishlistGame.find(params[:id])
        render json: this_game
    end

    def create
        new_game = WishlistGame.create!(wishlistgameparams)
        render json: new_game, status: :created
    end

    def destroy
        this_game = WishlistGame.find(params[:id])
        this_game.destroy
        render status: :ok
    end

    def update
        this_game = WishlistGame.find(params[:id])
    end

    private

    def wishlistgameparams
        params.permit(:user_id, :game_id)
    end
end
