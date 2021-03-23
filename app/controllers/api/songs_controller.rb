
class Api::SongsController < ApplicationController
  def create
    @song = Song.new(song_params)
    if @song.save!
      render :show
    else
      render json: @song.errors.full_messages
    end
  end

  def show
    @song = Song.find(params[:id])
    render :show
  end

  def index
    @songs = Song.all
    render :index
  end


  def edit
    @song = Song.find()
  end

  def destroy
  end

  private
  def song_params
    params.require(:song)
      .permit(:name, :length, :artist_id,  :info, :album_id, :genre)
  end   #-# check if this can have info be optional.
end


