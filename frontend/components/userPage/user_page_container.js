import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import UserPage from './user_page';
import {fetchUserSongs} from '../../actions/song_actions';
import {printHowLongAgo} from '../../util/misc_utils';


const mapStateToProps = (state) =>{
  return {
    currentUser:state.entities.users[state.session.id],
    songs: state.entities.songs,
    printHowLongAgo
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    fetchUserSongs: (id)=>{dispatch(fetchUserSongs(id))}

  }
}


export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPage));