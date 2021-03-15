class UsersController < ApplicationController

  def create
    @u = User.new(user_params)
    if @u.find_by(username: user_params[:username])
      render json: ['Username already taken.'],status: 401     ###
    elsif @u.save!
      render :show
    else
      render json: ['Invalid username or password.  Please try again.']
    end
  end
  
  def destroy
    @u = User.find_by_credentials(user_params[:username], user_params[:password])
    if @u
      @u.destroy
      true      ####render somewhere
    else
      render json: ['Invalid username or password.  Please try again.']
  end


  private
    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
end
