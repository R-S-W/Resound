class AddPathsToSongs < ActiveRecord::Migration[5.2]
  def change
        add_column :songs, :path, :string , null:false

  end
end
