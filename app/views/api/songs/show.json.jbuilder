
  json.extract! @song, :name, :length, :info, :artist_name, :id
  json.audioURL url_for(@song.audio)
  json.albumCoverURL url_for(@song.album_cover)
