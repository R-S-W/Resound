json.array! @comments do |c|
  json.extract! c, :id, :content, :song_id, :user_id, :username, :created_at
end