class Song < ApplicationRecord
  validates :name, :length, :artist_id, presence: true
  validates :info, :album_id
  validates :genre  #-# add later





  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :User
  
  has_many :comments

  #-# belongs to album , optional

end