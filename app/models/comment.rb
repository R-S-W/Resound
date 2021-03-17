class Comment < ApplicationRecord
  validates :content, length: {minimum: 1}
  validates :user_id, :song_id, presence: true

  belongs_to :song
  belongs_to :user 
end