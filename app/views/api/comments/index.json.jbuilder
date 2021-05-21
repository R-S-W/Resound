json.array! @comments do |c|
  c.extract! c :content, :song_id, :user_id
end