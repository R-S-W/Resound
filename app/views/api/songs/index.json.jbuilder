
json.array! @songs do |song|
  json.extract song, :name, :length, :info , :artist_id, :album_id, 
  json.audioURL url_for(song.audio)
end