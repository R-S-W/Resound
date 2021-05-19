import { divide } from 'lodash';
import React from 'react';

class UserPage extends React.Component{
  constructor(props){
    super(props);
    this.userId = parseInt(this.props.match.params.userId);



    this.state = {}
    this.isMissingSongs = true;
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

  componentDidUpdate(){
    this.isMissingSongs = false;
  }

  getUserSongs(){
    this.isMissingSongs = false;
    for (let i =0; i< this.props.currentUser.songIds.length; i++){
      if (!this.props.songs[this.props.currentUser.songIds[i]]){
        this.props.fetchUserSongs(this.userId);
        this.isMissingSongs = true;
        break;
      }
    } 
  }

  trackList(){
    if (this.isMissingSongs){
      return <div>Tracklist empty</div>
    }
    let songList=[];
    this.props.currentUser.songIds.forEach(sid=>{
      songList.push(this.props.songs[sid])  ;
    });

    debugger


    return <ul>
      {
        songList.forEach((s)=>{

          <li id = {`song-${s.id}`}>
            <img className = 'album-pic' href=  '#'></img>
            <button className = 'song-play'></button>
            <span>{s.artist_name}</span>
            <span>{s.name}</span>
            <span>{s.created_at}</span>
            <img className='song-wave-pic' href= {window.defaultSongWave}></img>
          </li>
        })
      }
    </ul>
  }

}

export default UserPage;