
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


  def update
    @song = Song.find(params[:id])
    @updated_song = Song.new(song_params)
    if @song && @updated_song
      @song[:name] =      song_params[:name]
      @song[:length] =    song_params[:length]
      @song[:artist_id] = song_params[:artist_id]
      @song[:path] =      song_params[:path]
      
      @song[:album_id] = song_params[:album_id] || @song[:album_id]
      @song[:info]     = song_params[:info] || @song[:info]    
      @song[:genre]    = song_params[:genre] || @song[:genre]   

      @song.save!
      render :show
    else
      render json: @song.errors.full_messages,status: 468

    end
  end

  def destroy
  end

  private
  def song_params
    params.require(:song)
      .permit(:name, :length, :artist_id,  :info, :album_id, :genre)
  end   #-# check if this can have info be optional.
end


