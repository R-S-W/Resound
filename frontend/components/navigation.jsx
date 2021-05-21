import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state)=>{
  return {
    currentUser: state.entities.users[state.session.id]
  }
}



class Navigation extends React.Component {

  render(){
    // return  !this.props.currentUser.id ?
    return !this.props.currentUser  ?
    null
    :
    <nav className = 'navigation'>
      <button className = 'splash-button'>
        <img src = {window.resoundLogoURL}></img>
      </button>
      <button className = 'user-page-button'>
        <img className ='profile-pic' src = {window.musicNote}></img>
        <span>{this.props.currentUser.username}</span>
      </button>
    </nav>
  }




}

export default connect(mapStateToProps)(Navigation);