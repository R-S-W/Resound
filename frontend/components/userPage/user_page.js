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
{/* 
      <ul>
        {

        }
      </ul> */}

      {this.trackList()}


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

  trackList(){

    let songList;
    this.props.currentUser.songIds.forEach(sid=>{
      songList.append(this.props.songs[sid])  ;
    });


    return <ul>
      {
        songList.forEach((s)=>{

          <li id = {`song-${s.id}`}>
            <img className = 'album-pic' href=  '#'></img>
            
            


          </li>
        })
      }
    </ul>
  }

}

export default UserPage;