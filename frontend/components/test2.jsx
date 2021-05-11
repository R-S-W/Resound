import { connect } from "react-redux"
import { fetchPlaylistSong } from "../actions/audio_player_actions"
import React from 'react'



const mapStateToProps = (state)=>{
  return {
    songPlaylist: state.entities.songs.songPlaylist
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    fetchPlaylistSong: (songId)=>{
      dispatch(fetchPlaylistSong(songId))
    }
  }
}


class Test2 extends React.Component{
  
  constructor(props){
    super(props);
    this.handleClick= this.handleClick.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.audioRef  = React.createRef();
  }

  handleClick(){
    this.props.fetchPlaylistSong(3);   //6
  }
  handlePlay(e){


    // if (this.audioRef.current.paused){
    //   this.audioRef.current.play();
    // }else{
    //   this.audioRef.current.pause();
    // }

  }

  render(){
    if (this.props.songPlaylist.length === 0){
      return (
        <button onClick = {this.handleClick}>Press</button>
      )
    }else{

      
      
      const urll  =this.props.songPlaylist[0].audioURL;
      return (
        <div>
          <audio 
            controls src={urll}
            ref = {this.audioRef}  
          >Das Audio</audio>
          Weh
          {urll}
          {/* <img src={urll} /> */}
          <button onClick = {this.handlePlay}>Pause/Play</button>
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test2)