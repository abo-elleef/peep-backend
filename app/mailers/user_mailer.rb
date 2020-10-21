class UserMailer < ApplicationMailer

  def welcome_email
    user = User.find(params[:user_id])
    mail(to: user.email, subject: "Welcome In Peep!")
  end
end
