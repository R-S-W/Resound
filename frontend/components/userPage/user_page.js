import { divide } from 'lodash';
import React from 'react';

class UserPage extends React.Component{
  constructor(props){
    super(props);
    this.userId = parseInt(this.props.match.params.userId);



    this.state = {}
  }

  componentDidMount(){
    this.getUserSongs();
  }


  render(){
    return <div className = 'user-page-component'>
      <header>
        <img className = 'cover-pic'
          href = '#'
        ></img>
        <img className = 'profile-pic'
          href = '#'
        ></img>
      </header>
      
      <nav>
        <button>All</button>
        <button>Popular Tracks</button>
        <button>Tracks</button>
      </nav>

      <footer>
        <img className = 'footer-pic' href = '#'></img>
      </footer>


    </div>
  }

  getUserSongs(){
    for (let i =0; i< this.props.currentUser.songIds.length; i++){
      if (!this.props.songs[this.props.currentUser.songIds[i]]){
        this.props.fetchUserSongs(this.userId);
      }
    } 
  }

}

export default UserPage;