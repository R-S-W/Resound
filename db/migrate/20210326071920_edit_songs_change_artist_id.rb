class EditSongsChangeArtistId < ActiveRecord::Migration[5.2]
  def change
    remove_column :songs, :artist_id 
    add_column :songs,:artist_name, :string
  end
end
