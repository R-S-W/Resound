class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :name, null:false
      t.integer :length, null:false
      t.text :info
      t.integer :artist_id, null:false
      t.integer :album_id
    end
    add_index :songs, :name
  end
end
