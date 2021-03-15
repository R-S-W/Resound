
class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil:true}


  attr_reader :password
  before_validation: ensure_session_token

  def class.find_by_credentials(uname, pw)
    @u = User.find_by(username: uname);
    if (@u && @u.is_password?(pw))
      @u
    else
      nil  ###
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw);
  end

  def is_password?(pw)
    return BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def ensure_session_token
    this.session_token ||= SecureRandom.urlsafe_base64(32)
  end

  def reset_session_token!
    this.session_token = SecureRandom.urlsafe_base64(32)
    self.save!
    this.session_token
  end


end