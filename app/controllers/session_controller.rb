class SessionController < ApplicationController
  # before_action :authorize_admin

  def new
  end

  def create
    user = User.find_by :email => params[:email]
    if user.present? && user.authenticate(params[:password])
      session[:user_id] = user.id
      flash[:notice] = "Login successful!"
      # redirect_to root_path
    else
      flash[:error] = "The password or email entered was incorrect!"
      # redirect_to session_path
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end
end

private
def authorize_admin
  redirect_to root_path unless @current_user.present? && @current_user.admin
end
