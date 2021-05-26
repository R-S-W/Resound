class Comment < ApplicationRecord
  
  validates :user_id, :song_id, :content, :username, presence: true

  belongs_to :song
  belongs_to :user 
end