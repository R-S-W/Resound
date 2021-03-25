
json.array! @songs do |song|
    json.extract song, :name, :length, :info , :artist_id, :album_id, :id
    json.audioURL url_for(song.audio)
    json.albumCoverURL url_for(@song.album_cover)
  
end