class FavouriteGamesController < ApplicationController
    def index
        all_games = FavouriteGame.all
        render json: all_games
    end

    def show
        this_game = FavouriteGame.find(params[:id])
        render json: this_game
    end

    def create
        new_game = FavouriteGame.create!(favouritegameparams)
        render json: new_game, status: :created
    end

    def destroy
        this_game = FavouriteGame.find(params[:id])
        this_game.destroy
        render status: :ok
    end

    def update
        this_game = FavouriteGame.find(params[:id])
    end

    private

    def favouritegameparams
        params.permit(:user_id, :game_id)
    end
end
