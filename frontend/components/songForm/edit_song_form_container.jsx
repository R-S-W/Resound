import { connect } from 'react-redux';
import SongForm from './song_form'
import {updateSong} from '../../actions/song_actions';

const mapStateToProps = (state)=>{
  return {
    formType: 'update'
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    handleSong: (s)=>{dispatch(updateSong(s))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongForm);
