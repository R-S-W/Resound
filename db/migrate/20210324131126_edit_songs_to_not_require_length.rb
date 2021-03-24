class EditSongsToNotRequireLength < ActiveRecord::Migration[5.2]
  def change
    remove_column :songs, :length
    add_column :songs, :length, :string
  end
end
