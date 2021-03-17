class Api::SessionsController < ApplicationController

  def create 
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password]);
    if @user
      login!(@user)
      render 'api/users/show'
      # render json: ["Successfully logged in"]
    else
      render json: ['Invalid username or password'], status: 401
    end
  end

  def destroy
    if logged_in?
      logout!
      render json: {} #'api/users/show'
    else
      render json: ['There is no one logged in.'], status: 404
    end
  end



end
