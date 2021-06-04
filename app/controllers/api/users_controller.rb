
class Api::UsersController < ApplicationController

  def create
    if user_params[:password].size <6
      render json: ['Please create a password greater than 6 characters.'],status: 401 
      return 
    end
    @user = User.new(user_params)
    if User.find_by(username: user_params[:username])
      render json: ['Username already taken.'], status: 401
    elsif User.find_by(email: user_params[:email])
      render json:  ["A user has already registered an account with this email."], status: 401
    
    elsif !user_params[:email].include?('@')
      render json: ['Invalid email.  Please try again.'], status: 401
    elsif @user.save!
      login!(@user)
      render :show
    else
      render json: ['Invalid username or password.  Please try again.'], status: 422
    end
  end
  
  # def destroy
  #   @u = current_user ##User.find_by_credentials(user_params[:username], user_params[:password])
  #   if @u
  #     logout
  #     @u.destroy
  #     render 'api/users/show'    ####render somewhere
  #   else
  #     render json: ['Invalid username or password.  Please try again.'], status: 404
  #   end
  # end

  def show  
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json:  @user.errors.full_messages, status: 422
    end
  end


  private
    def user_params
      params.require(:user).permit(:username, :email, :password)
    end


end


# class UsersController < Knock::AuthTokenController
#   skip_before_action :verify_authenticity_token
# end