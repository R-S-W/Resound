import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/session_actions'; 

const mapStateToProps = (state)=>{
  return {
    currentUser: state.entities.users[state.session.id]
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    logout: ()=>dispatch(logout())
  }
}



class Navigation extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    // return  !this.props.currentUser.id ?
    return !this.props.currentUser  ?
    null
    :
    <nav className = 'navigation'>
      <Link to = '/'>
        <button className = 'splash-button'>
          <img src = {window.resoundLogoWhiteURL}></img>
        </button>
      </Link>
      <div className = 'spacer'></div>
      <Link to = '/songs/new'>
        <button className = 'upload-button'>
          <span>Upload</span> 
        </button>
      </Link>
      <Link to = {`/users/${this.props.currentUser.id}`}>
        <button className = 'user-page-button' onClick = {this.handleUserPageButton}>
          <img className ='profile-pic' src = {window.musicNote}></img>
          <span>{this.props.currentUser.username}</span>
        </button>
      </Link>
      <button 
        className='logout-button press-button'
        onClick = {this.props.logout}>
          Logout
      </button>
    </nav>
  }




}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);