json.extract! user, :username, :email, :id
json.songIds user.songs.map{|s|s.id}.sort_by{|id|-id}