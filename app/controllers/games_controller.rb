class GamesController < ApplicationController
    
    def index
        all_games = Game.all
        render json: all_games
    end

    def show
        this_game = Game.find(params[:id])
        render json: this_game
    end
end
