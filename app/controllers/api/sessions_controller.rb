class Api::SessionsController < ApplicationController

  def create 
    email = params[:user][:email]
    uname = params[:user][:username]

    if email
      u = User.find_by(email: email)
      uname = u[:username] if u
    # else
    #   uname = params[:user][:username]
    end
    if uname != '' &&  uname  
      @user = User.find_by_credentials(uname, params[:user][:password]);
      if @user
        login!(@user)
        render 'api/users/show'
        # render json: ["Successfully logged in"]
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
