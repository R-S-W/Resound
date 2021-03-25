import AudioPlayer from './audio_player'
import { connect } from "react-redux"


import { fetchPlaylistSong, nextSong, shufflePlaylist} from "../../actions/song_actions"



const mapStateToProps = (state)=>{
  
  return {
    songPlaylist: state.entities.songs.songPlaylist, // Make sure this is configureda ssuch #-#
    playlistIndex: state.entities.songs.playlistIndex,
    loggedIn : !!state.session.id,

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

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);