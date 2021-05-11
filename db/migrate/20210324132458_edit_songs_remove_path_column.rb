class EditSongsRemovePathColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :songs, :path
  end
end
