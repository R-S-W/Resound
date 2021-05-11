import React from 'react';
import { connect } from 'react-redux';
import UserPage from './user_page';
import {fetchUserSongs} from '../../actions/song_actions'


const mapStateToProps = (state) =>{
  return {
    currentUser:state.entities.users[state.session.id],
    songs: state.entities.songs, ////////////

  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    fetchUserSongs: (id)=>{dispatch(fetchUserSongs(id))}

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPage);