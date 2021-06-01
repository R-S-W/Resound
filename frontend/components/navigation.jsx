import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state)=>{
  return {
    currentUser: state.entities.users[state.session.id]
  }
}



class Navigation extends React.Component {

  // constructor(props){
  //   super(props);
  //   // this.handleUserPageButton = this.handleUserPageButton.bind(this);
  // }

  // handleUserPageButton(e){
    
  // }

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
      <Link to = 'songs/new'>
        <button className = 'upload-button'>
          <span>Upload</span> 
        </button>
      </Link>
      <Link to = {`users/${this.props.currentUser.id}`}>
        <button className = 'user-page-button' onClick = {this.handleUserPageButton}>
          <img className ='profile-pic' src = {window.musicNote}></img>
          <span>{this.props.currentUser.username}</span>
        </button>
      </Link>
    </nav>
  }




}

export default connect(mapStateToProps)(Navigation);