import { divide } from 'lodash';
import React from 'react';
import { GoPlay} from 'react-icons/go';
import {BsPlayFill} from 'react-icons/bs';

class UserPage extends React.Component{
  constructor(props){
    super(props);
    this.userId = parseInt(this.props.match.params.userId);



    this.state = {
      isMissingASong: true
    }
    
  }

  componentDidMount(){
    this.manageMissingSongs();
  }


  render(){
    return <div className = 'user-page-component'>
      <header>
        <img className = 'cover-pic'
          src = '#'
        ></img>
        <img className = 'profile-pic'
          src = '#'
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
        <img className = 'footer-pic' src = '#'></img>
      </footer>


    </div>
  }

  componentDidUpdate(){
    console.log('comp Did update in userpage')
    debugger
    this.manageMissingSongs();
  }

  // getUserSongs(){
  //   for (let i =0; i< this.props.currentUser.songIds.length; i++){
  //     if (!this.props.songs[this.props.currentUser.songIds[i]]){
  //       this.props.fetchUserSongs(this.userId);
  //       break;
  //     }
  //   } 
  // }

  manageMissingSongs(){
    if (this.isThereMissingSong()){
      this.props.fetchUserSongs(this.userId);
      if (!this.state.isMissingASong) this.setState({isMissingASong : true});
    }else{
      if (this.state.isMissingASong)  this.setState({isMissingASong:false});
    }
  }

  isThereMissingSong(){
    for (let i =0; i< this.props.currentUser.songIds.length; i++){
      if (!this.props.songs[this.props.currentUser.songIds[i]]){
        return true;
      }
    }
    return false;
  }

  trackList(){
    let songList=[];
    if (this.state.isMissingASong) return <div>Tracklist empty</div>
    
    this.props.currentUser.songIds.forEach(sid=>{
      songList.push(this.props.songs[sid])  ;
    });

    debugger
    


    return <ul className = 'track-list'>
      {
        songList.map((s)=>{
          return <li id = {`song-${s.id}`}>
            <img className = 'album-pic' src= {s.albumCover}></img>
            <button className = 'play-button'>
              <BsPlayFill className = 'play-icon-background'/>
              <GoPlay className ='play-icon'/>
            </button>
            <article className = 'text'>
              <span className = 'artist-name'>{s.artist_name}</span>
              <span className = 'song-name'>{s.name}</span>
            </article>
            <span className="time-ago">{this.props.printHowLongAgo(s.created_at)}</span>
            <img className='song-wave-pic' src= {window.defaultSongWave}></img>
            <article className = 'bottom-buttons'></article>
          </li>
        })
      }
    </ul>
  }

}

export default UserPage;