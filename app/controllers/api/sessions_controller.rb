require_relative('../../utils/controller_utils')

class Api::SessionsController < ApplicationController

  def create 
    email = params[:user][:email]
    uname = params[:user][:username]

    if email
      u = User.find_by(email: email)
      uname = u[:username] if u
    end
    if uname != '' &&  uname  
      @user = User.find_by_credentials(uname, params[:user][:password]);
      if @user
        login!(@user)
        @song_ids = sort_by_descending_id(@user.songs)
        render 'api/users/show'
      else
        render json: ['Invalid username or password'], status: 401
      end
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
