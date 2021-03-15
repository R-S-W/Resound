class EditSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :created_at, :datetime, null:false
    add_column :songs, :updated_at, :datetime, null:false
  end
end
