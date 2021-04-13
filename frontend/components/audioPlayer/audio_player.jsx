
import React from 'react';
import SongBar from '../songBar/song_bar';
import LinkBar from '../linkBar/link_bar';



class AudioPlayer extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    if (true || this.props.loggedIn){///////\

      return (
        <div className = 'audio-player'>
          <SongBar
            songPlaylist = {this.props.songPlaylist}
            fetchPlaylistSong = {this.props.fetchPlaylistSong}
            nextSong = {this.props.nextSong}
            shufflePlaylist = {this.props.shufflePlaylist}
            
            
          />

          <LinkBar
            songPlaylist =  {this.props.songPlaylist}
            />

        </div>
      )
    }else{
      return null;
    }
  }
}
export default AudioPlayer;