import AudioPlayer from './audio_player'
import { connect } from "react-redux"


const mapStateToProps = (state)=>{
  debugger
  return {
    songPlaylist: state.entities.songs.songPlaylist, // Make sure this is configureda ssuch #-#
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);