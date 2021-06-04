
import React from 'react';
import SongBarContainer from './song_bar_container';
import LinkBar from './link_bar';



class AudioPlayer extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    if (true                          || this.props.loggedIn){
      return (
        <div className = 'audio-player'>
          <SongBarContainer/>

          <LinkBar/>

        </div>
      )
    }else{
      return null;
    }
  }
}
export default AudioPlayer;