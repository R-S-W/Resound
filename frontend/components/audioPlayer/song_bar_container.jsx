import SongBar from './song_bar';
import {connect} from 'react-redux';

import { fetchPlaylistSong, nextSong, shufflePlaylist} from "../../actions/song_actions"



const mapStateToProps = (state)=>{
  
  return {
    songs: state.entities.songs,
    songPlaylist: state.entities.songs.songPlaylist, 
    playlistIndex: state.entities.songs.playlistIndex,

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