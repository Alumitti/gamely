class UsersController < ApplicationController

    def index
        all_users = User.all
        render json: all_users
    end

    def create
        new_user = User.create!(new_user_params)
        render json: new_user, status: :created
    end

    def show
        current_user = User.find(session[:user_id])
        render json: current_user, status: :ok
    end

    def update
        this_user = User.find(params[:id])
        this_user.update!(user_params)
        render json: this_user, status: :no_content
    end

    def myfavouritegames
        session[:init] = true
        current_user = User.find(session[:user_id])
        render json: current_user.favourites
    end

    def mywishlistsgames
        session[:init] = true
        current_user = User.find(session[:user_id])
        render json: current_user.wishlists
    end

    private

    def new_user_params
        params.permit(:username, :password, :user, :password_confirmation)
    end

    def user_params
        params.permit(:username, :password, :user)
    end
end
