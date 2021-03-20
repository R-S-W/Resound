
import React from 'react';
import SongBar from '../songBar/song_bar';
import LinkBar from '../linkBar/link_bar';



class AudioPlayer extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className = 'audio-player'>
        <SongBar
          songPlaylist = {this.props.songPlaylist}

        />

        <LinkBar
          songPlaylist =  {this.props.songPlaylist}
        />

      </div>
    )
  }
}
export default AudioPlayer;