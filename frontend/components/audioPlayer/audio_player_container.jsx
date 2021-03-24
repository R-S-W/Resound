import AudioPlayer from './audio_player'
import { connect } from "react-redux"


import { fetchPlaylistSong } from "../../actions/song_actions"



const mapStateToProps = (state)=>{
  
  return {
    songPlaylist: state.entities.songs.songPlaylist, // Make sure this is configureda ssuch #-#
    loggedIn : !!state.session.id
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    fetchPlaylistSong: (songId) => {
      dispatch(fetchPlaylistSong(songId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);