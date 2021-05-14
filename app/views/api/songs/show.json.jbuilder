  json.extract! @song, :name, :length, :info, :artist_name, :id, :created_at
  json.audio url_for(controller: 'users',
        action: 'new',
        message: 'Welcome!',
        host: 'www.example.com')
  json.albumCover url_for(@song.album_cover)