
import {connect} from 'react-redux';
import SongForm from './song_form'
import {createSong} from '../../actions/song_actions'
const mapStateToProps = (state)=>{
  return {
    formType:'create',
    currentUserId: state.session.id
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    handleSong: (s)=>{dispatch(createSong(s))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongForm);