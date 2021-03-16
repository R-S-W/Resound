class Api::UsersController < ApplicationController

  def create
    @u = User.new(user_params)
    if @u.find_by(username: user_params[:username])
      render json: ['Username already taken.'],status: 401     ###
    elsif @u.save!
      login!(@u)
      render :show
    else
      render json:  @user.errors.full_messages, status: 422 #['Invalid username or password.  Please try again.']
    end
  end
  
  def destroy
    @u = current_user ##User.find_by_credentials(user_params[:username], user_params[:password])
    if @u
      logout
      @u.destroy
      render 'api/users/show'    ####render somewhere
    else
      render json: ['Invalid username or password.  Please try again.'], status: 404
  end


  private
    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
end
