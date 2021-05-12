
import {connect} from 'react-redux';
import SongForm from './song_form'
import {createSong, fetchSong} from '../../actions/song_actions';
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state)=>{
  return {
    formType:'create',
    currentUserId: state.session.id,
    currentUserUsername: state.entities.users[state.session.id].username,
    songs: state.entities.songs
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    handleSong: (s)=>{dispatch(createSong(s))},
    fetchSong: (id)=>{dispatch(fetchSong(id))}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongForm));