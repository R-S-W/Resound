import { connect } from 'react-redux';
import SongForm from './song_form'
import {updateSong, fetchSong} from '../../actions/song_actions';
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state)=>{
  return {
    formType: 'update', 
    currentUserId: state.session.id,
    songs: state.entities.songs
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    handleSong: (formData, songId)=>{dispatch(updateSong(formData, songId))},
    fetchSong: (id)=>{dispatch(fetchSong(id))}

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongForm));
