
class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil:true}


  attr_reader :password
  before_validation :ensure_session_token

  def self.find_by_credentials(uname, pw)
    @u = User.find_by(username: uname);
    if (@u && @u.is_password?(pw))
      @u
    else
      nil  ###
    end
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw);
  end

  def is_password?(pw)
    return BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(32)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(32)
    self.save!
    self.session_token
  end


  has_many :songs,
    foreign_key: :artist_id

  has_many :albums,
    foreign_key: :artist_id

end