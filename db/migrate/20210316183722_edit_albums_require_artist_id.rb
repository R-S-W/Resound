class EditAlbumsRequireArtistId < ActiveRecord::Migration[5.2]
  def change
    remove_column :albums, :artist_id
    add_column :albums, :artist_id, :integer, null:false
  end
end
