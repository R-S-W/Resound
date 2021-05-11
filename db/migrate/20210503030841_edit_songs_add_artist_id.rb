class EditSongsAddArtistId < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :artist_id, :integer, null: false
  end
end
