import SongBar from './song_bar';
import {connect} from 'react-redux';

import { fetchPlaylistSong, nextSong, shufflePlaylist} from "../../actions/song_actions"



const mapStateToProps = (state)=>{
  
  return {
    songPlaylist: state.entities.playlist.songPlaylist, 
    playlistIndex: state.entities.playlist.playlistIndex,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    fetchPlaylistSong: (songId) => {
      dispatch(fetchPlaylistSong(songId))
    },
    nextSong:()=>{
      dispatch(nextSong());
    },
    shufflePlaylist: ()=>{
      dispatch(shufflePlaylist())
    },
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongBar);