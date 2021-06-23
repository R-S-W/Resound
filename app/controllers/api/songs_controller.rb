
class Api::SongsController < ApplicationController
  def create
    @song = Song.new(song_params)
      if (@song.audio && @song.album_cover && @song.save!)
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
      @songs = Song.where(artist_id: params[:user_id])
    else
      @songs = Song.all
    end
    @songs = @songs.sort_by{|s| s.id}
    # @songs = @songs.select{|e| e.id!=17 && e.id!= 18 }
    render :index
  end


  def update
    @song = Song.find(params[:id])
    if @song 
      @song[:name] =      song_params[:name]
      @song[:length] =    song_params[:length]
      @song[:artist_id] = song_params[:artist_id]
      
      @song[:album_id] = song_params[:album_id] || @song[:album_id]
      @song[:info]     = song_params[:info] || @song[:info]    
      @song[:artist_name] = song_params[:artist_name] || @song[:artist_name]
      @song[:genre]    = song_params[:genre] || @song[:genre]   

      @song.save!
      render :show
    else
      render json: @song.errors.full_messages,status: 468

    end
  end

  def destroy
    @song = Song.find(params[:id])
    if (@song)
      id = @song.id
      aid = @song.artist_id
      @song.destroy
      render json: {id: id, artistId: aid }
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
        :artist_name,
        :info, 
        :album_id, 
        :genre)
  end   #-# check if this can have info be optional.
end


