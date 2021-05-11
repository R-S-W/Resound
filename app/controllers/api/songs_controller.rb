
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
    if params.has_key?(:user_id)
      @songs = Songs.where(artist_id: params[:user_id])
    else
      @songs = Song.all
    end
    render :index
  end


  def update
    debugger
    @song = Song.find(params[:id])
    if @song 
      @song[:name] =      song_params[:name]
      @song[:length] =    song_params[:length]
      @song[:artist_id] = song_params[:artist_id]
      
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
    @song = Song.find(id: params[:id])
    if (@song)
      @song.destroy
      render json: {}
    else
      render json: ['Song not found.'], status: 409 
    end
  end

  private
  def song_params
    params.require(:song)
      .permit(
        :name,
        :length, 
        :artist_id,
        :audio,
        :album_cover,  
        :info, 
        :album_id, 
        :genre)
  end   #-# check if this can have info be optional.
end


