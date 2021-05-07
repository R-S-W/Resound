import { connect } from 'react-redux';
import SongForm from './song_form'
import {updateSong, fetchSong} from '../../actions/song_actions';
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state)=>{
  return {
    formType: 'update'
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    handleSong: (s)=>{dispatch(updateSong(s))},
    fetchSong: (id)=>{dispatch(fetchSong(id))}

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongForm));
