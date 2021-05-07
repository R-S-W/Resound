
json.array! @songs do |song|
    json.extract! song, :name, :length, :info , :artist_name,  :id
    json.audio url_for(song.audio)
    json.albumCover url_for(song.album_cover)
  
end